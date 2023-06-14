import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(imag => (
        <ImageGalleryItem openModal={openModal} key={imag.id} imag={imag} />
      ))}
    </ul>
  );
};
