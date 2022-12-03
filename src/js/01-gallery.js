// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const imageContainer = document.querySelector('.gallery');
const imageMarcup = createPictureMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarcup);

function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt ="${description}" />
</a></div>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
