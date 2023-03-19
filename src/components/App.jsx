import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

import Button from './Button/Button';
import pictureApi from '../services/picture-api';

export default function App() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [limitPage, setLimitPage] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current || !name) {
      isFirstRender.current = false;
      return;
    }
    setStatus('pending');
    pictureApi
      .fetchPicture(name, page)
      .then(({ hits, total }) => {
        setPictures(prevState => [...prevState, ...hits]);
        setLimitPage(Math.ceil(total / 12));
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejectsd');
      });
  }, [name, page]);

  const handleFormSubmit = searchName => {
    setName(searchName);
    setPage(1);
    setPictures([]);
    setError(null);
    setStatus('');
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejectsd' && <p>{error.message}</p>}
      {status === 'resolved' && pictures.length > 0 && (
        <ImageGallery pictures={pictures} />
      )}
      {name && (
        <Button page={page} limitPage={limitPage} onLoadMore={loadMore} />
      )}
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}
