import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import GalleryLoader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    urlLargeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
    if (prevState.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleQuery = searchQuery => {
    this.setState({ query: searchQuery, images: [], page: 1 });
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=19710989-7d132287f37ef0bf3153ac7f1&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => response.data.hits)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  handleClickImage = event => {
    const url = event.target.dataset.image;
    this.setState({ urlLargeImage: url });

    this.toggleModal();
  };

  render() {
    const showButton = this.state.images.length;
    const { isLoading, showModal, urlLargeImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery
          images={this.state.images}
          showLargeImage={this.handleClickImage}
        />
        {isLoading && <GalleryLoader />}
        {showButton > 0 && <Button onClick={this.fetchImages} />}
        {showModal && (
          <Modal image={urlLargeImage} closeModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
