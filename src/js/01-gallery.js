// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');


function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li>
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}"
         />
    </a>
    </li>
        `
    }).join('');
}

galleryRef.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
