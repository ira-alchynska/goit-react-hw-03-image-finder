import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, bigHit, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={url} alt="" width="260" data-image={bigHit} className={styles.ImageGalleryItemImage} onClick={onClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string,
  bigHit: PropTypes.string,
};

export default ImageGalleryItem;
