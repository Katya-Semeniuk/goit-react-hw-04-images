import React from 'react';
import './Button.css';

const Button = ({ page, limitPage, onLoadMore }) => {
  if (page === limitPage) {
    return;
  }
  return (
    <button onClick={onLoadMore} type="button" className="button">
      Load more
    </button>
  );
};

export default Button;
