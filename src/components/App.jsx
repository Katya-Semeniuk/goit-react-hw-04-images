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

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log('First render');
    if (isFirstRender.current || !name) {
      console.log('Name is empty string');
      isFirstRender.current = false;
      return;
    }

    setStatus('pending');
    console.log('Name is NOT empty string');
    pictureApi
      .fetchPicture(name, page)
      .then(({ hits, total, totalHits }) => {
        console.log(total);
        console.log(totalHits);
        setPictures(prevState => [...prevState, ...hits]);
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
      {name && <Button onLoadMore={loadMore} />}
      {/* {name !== '' && <Button onLoadMore={loadMore} />} */}
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}

// -----
// class App extends Component {
//   state = {
//     name: '',
//     page: 1,
//     pictures: [],
//     error: null,
//     status: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.name !== this.state.name ||
//       prevState.page !== this.state.page
//     ) {
//       this.setState({ status: 'pending' });
//       pictureApi
//         .fetchPicture(this.state.name, this.state.page)
//         .then(({ hits, total, totalHits }) =>
//           this.setState(prevState => ({
//             status: 'resolved',
//             pictures: [...prevState.pictures, ...hits],
//           }))
//         )
//         .catch(error => this.setState({ error, status: 'rejectsd' }));
//     }
//   }

//   handleFormSubmit = searchName => {
//     this.setState({
//       name: searchName,
//       page: 1,
//       pictures: [],
//       error: null,
//       status: '',
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { name, pictures, status, error } = this.state;
//     return (
//       <div>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {status === 'pending' && <Loader />}
//         {status === 'rejectsd' && <p>{error.message}</p>}
//         {status === 'resolved' && pictures.length > 0 && (
//           <ImageGallery pictures={pictures} />
//         )}
//         {name !== '' && <Button onLoadMore={this.loadMore} />}
//         <ToastContainer autoClose={3000} theme="colored" />
//       </div>
//     );
//   }
// }

// export default App;
