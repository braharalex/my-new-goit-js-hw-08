// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup;

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'>
 <a class='gallery__link' href='${original}'>
  <img class='gallery__image' src='${preview}' alt='${description}' />
 </a>
</li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
  disableRightClick: true,
  overlayOpacity: 0.85,
  showCounter: false,
});
