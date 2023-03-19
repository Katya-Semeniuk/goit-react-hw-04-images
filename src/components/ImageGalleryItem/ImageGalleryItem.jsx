import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  // -aбо перезаписати з попереднього
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li onClick={toggleModal} className="gallery_item">
        <img src={webformatURL} alt="" />
      </li>
      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number,
};
