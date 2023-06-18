import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { getImages } from 'API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showBtn, setshowBtn] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    getImages(query, page).then(({ hits, totalHits }) => {
      setImages(prevState => [...prevState, ...hits]);
      setshowBtn(page < Math.ceil(totalHits / 12));
    });
  }, [query, page]);

  const handelClick = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <Section>
        <Searchbar handleOnSubmit={handleSubmit} />
      </Section>
      <Section>
        <ImageGallery openModal={openModal} images={images} />
        {showBtn && <Button handelClick={handelClick} />}
      </Section>
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={openModal} />
      )}
    </>
  );
};
