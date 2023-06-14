import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Section } from './Section/Section';
import { getImages } from 'API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
    largeImageURL: '',
  };
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getImages(query, page).then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          showBtn: page < Math.ceil(totalHits / 12),
        }));
      });
    }
  }

  handelClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  openModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState({ largeImageURL });
  };

  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleSubmit} />
        </Section>
        <Section>
          <ImageGallery openModal={this.openModal} images={this.state.images} />
          {this.state.showBtn && <Button handelClick={this.handelClick} />}
        </Section>
        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.openModal}
          />
        )}
      </>
    );
  }
}
