import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ hits, onToggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            bigHit={largeImageURL}
            onImgOpen={onToggleModal}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};

export default ImageGallery;
