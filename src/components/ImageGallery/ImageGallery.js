import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} showLargeImage={showLargeImage} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default ImageGallery;
