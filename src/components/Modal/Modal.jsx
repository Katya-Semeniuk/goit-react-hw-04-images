import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ toggleModal, largeImageURL }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown());
    return () => {
      window.removeEventListener('keydown', handleKeyDown());
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImageURL} alt="" className="img_big" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};

// --------
// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
// import './Modal.css';

// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillMount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.toggleModal();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;
//     return createPortal(
//       <div className="overlay" onClick={this.handleBackdropClick}>
//         <div className="modal">
//           <img src={largeImageURL} alt="" className="img_big" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
// };
// export default Modal;
