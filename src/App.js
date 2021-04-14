import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import SpinerLoader from './components/Loader';
import Modal from './components/Modal';
import getHits from './services/Api';
import styles from './App.module.css';

class App extends Component {
  state = {
    hits: [],
    page: 1,
    query: '',
    isLoading: false,
    showModal: false,
    modalImg: '',
    error: '',
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      prevState.hits.length < this.state.hits.length &&
      this.state.hits.length > 12
    ) {
      return 'good choice';
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.query !== this.state.query) {
      this.fetchHits();
    }
    if (snapshot !== null) {
      this.scrollToBottom();
    }
  }

  handleChangeSearchQuery = searchQuery => {
    this.setState({ query: searchQuery, page: 1, hits: [], error: null });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchHits = () => {
    const { page, query } = this.state;
    const options = {
      page,
      query,
    };

    this.setState({ isLoading: true });

    getHits(options)
      .then(data => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...data],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: { url, alt },
    }));
  };

  render() {
    const {
      hits,
      error,
      modalImg: { url, alt },
      isLoading,
      showModal,
    } = this.state;
    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.handleChangeSearchQuery} />
        {isLoading && <SpinerLoader />}
        {hits.length > 0 && (
          <ImageGallery hits={hits} onToggleModal={this.toggleModal} />
        )}
        {hits.length > 0 && <Button onClick={this.fetchHits} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </div>
    );
  }
}

export default App;
