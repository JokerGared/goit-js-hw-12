// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';
export const refs = {
  form: document.querySelector('.form'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loader'),
};
export const per_page = 40;

let maxPages;
let userText = '';
let page;

function scrollAuto() {
  const galleryItem = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();
  window.scrollBy({
    top: galleryItem.height * 2,
    behavior: 'smooth',
  });
}

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  refs.loadMoreBtn.classList.remove('is-pending');
  page = 1;
  userText = e.target.elements.query.value.trim();
  if (userText === '') {
    iziToast.warning({
      position: 'topRight',
      message: `Please, write something`,
    });
    return;
  }
  clearGallery();
  refs.spinner.classList.add('is-pending');
  try {
    const imagesFromServer = await getImages(userText, page);
    renderImages(imagesFromServer.hits);
    maxPages = Math.ceil(imagesFromServer.totalHits / per_page);
    if (page < maxPages) {
      refs.loadMoreBtn.classList.add('is-pending');
    }
  } catch {
    iziToast.error({
      position: 'topRight',
      message: `Sorry, there are no images matching your search query. Please try again!`,
    });
  }
  e.target.reset();
});

refs.loadMoreBtn.addEventListener('click', async () => {
  refs.loadMoreBtn.classList.remove('is-pending');
  const nextPage = page + 1;
  refs.spinner.classList.add('is-pending');
  try {
    const imagesFromServer = await getImages(userText, nextPage);
    renderImages(imagesFromServer.hits);
    scrollAuto();
    refs.loadMoreBtn.textContent = 'Load more';
    if (nextPage < maxPages) {
      refs.loadMoreBtn.classList.add('is-pending');
      page += 1;
    } else {
      iziToast.info({
        position: 'topRight',
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  } catch {
    iziToast.error({
      position: 'topRight',
      message: `Server stops responding`,
    });
    refs.loadMoreBtn.classList.add('is-pending');
    refs.loadMoreBtn.textContent = 'Try again';
  }
});
