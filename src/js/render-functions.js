import { refs } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  animationSpeed: 50,
  fadeSpeed: 100,
  scrollZoom: false,
});

export function renderImages(images) {
  const markup = imagesTemplate(images);
  refs.gallery.innerHTML = markup;
  lightBox.refresh();
}

function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  const uniqueTags = [
    ...new Set(tags.split(', ').map(word => word.trim())),
  ].join(', ');
  return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${uniqueTags}" width="360" height = "200"/>
        <ul class="characteristics">
          <li class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${likes}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${views}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${comments}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${downloads}</span>
          </li>
        </ul>
      </a>
    </li>`;
}
function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
