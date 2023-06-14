import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imag, openModal }) => {
  return (
    <li className={css.items}>
      <img
        width={400}
        height={200}
        onClick={() => openModal(imag.largeImageURL)}
        src={imag.webformatURL}
        alt={imag.tags}
      />
    </li>
  );
};
