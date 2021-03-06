import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, showLargeImage }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt=""
        data-image={largeImageURL}
        onClick={showLargeImage}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
