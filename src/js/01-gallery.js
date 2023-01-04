// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

console.log(SimpleLightbox);

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryBox = document.querySelector(".gallery");
const galleryMarkap = createGaleryMarkup(galleryItems);


galleryBox.insertAdjacentHTML("beforeend", galleryMarkap);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(
      (image) => `
    <a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" 
 />
    </a>
`
    )
    .join("");
}

const simpleLightboxOptions = {
  captionsData: "alt",
  captionDelay: 250,
};

let gallerySet = new SimpleLightbox(".gallery a", simpleLightboxOptions);



