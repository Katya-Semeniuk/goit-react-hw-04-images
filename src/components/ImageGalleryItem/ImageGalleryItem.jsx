import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  // -фбо перезаписати з попереднього
  const toggleModal = () => {
    setShowModal(!this.state.showModal);
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

// ---
// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState({ showModal: !this.state.showModal });
//   };

//   render() {
//     const { webformatURL, largeImageURL } = this.props;
//     return (
//       <>
//         <li onClick={this.toggleModal} className="gallery_item">
//           <img src={webformatURL} alt="" />
//         </li>
//         {this.state.showModal && (
//           <Modal
//             onClose={this.toggleModal}
//             largeImageURL={largeImageURL}
//             toggleModal={this.toggleModal}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number,
};
