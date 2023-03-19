import React from 'react';
import './Loader.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="70"
        width="70"
        radius="9"
        color="#2a17a2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        visible={true}
      />
    </div>
  );
};

export default Loader;
