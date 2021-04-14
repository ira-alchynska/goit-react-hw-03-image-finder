import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, bigHit, onImgOpen }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onImgOpen(bigHit, alt)}
    >
      <img src={url} alt={alt} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  bigHit: PropTypes.string,
};

export default ImageGalleryItem;
