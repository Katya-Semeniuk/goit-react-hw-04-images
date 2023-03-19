import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures }) => {
  return (
    <>
      <ul className="gallery">
        {pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              id={id}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape()),
};

export default ImageGallery;
