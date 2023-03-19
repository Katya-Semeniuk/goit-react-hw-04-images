import React from 'react';
import './Button.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button" className="button">
      Load more
    </button>
  );
};

export default Button;
