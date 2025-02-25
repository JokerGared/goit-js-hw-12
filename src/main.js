// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';
export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  spinner: document.querySelector('.loader'),
};
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const userText = e.target.elements.query.value;
  if (userText.trim() === '') {
    iziToast.warning({
      position: 'topRight',
      message: `Please, write something`,
    });
    return;
  }
  clearGallery();
  refs.spinner.classList.add('is-pending');
  getImages(userText)
    .then(data => {
      renderImages(data);
    })
    .catch(() => {
      iziToast.error({
        position: 'topRight',
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
      refs.spinner.classList.remove('is-pending');
    });
  e.target.reset();
});
