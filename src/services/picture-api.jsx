const BASE_URL = 'https://pixabay.com/api';

const API_KEY = '32332367-6643b5098e6f829f8817b33dd';

function fetchPicture(name, page) {
  const url = `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any picture with name ${name}`));
  });
}

const api = {
  fetchPicture,
};

export default api;
