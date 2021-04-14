import axios from 'axios';

const API_KEY = '20362971-ecfbb08827ff6b5f6a4a06bfb';
const BASE_URL = 'https://pixabay.com/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchGetHits = async ({ query = '', currentpage = 1 }) => {
  const url = `/api/?q=${query}&page=${currentpage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return await axios.get(url).then(({ data }) => data.hits);
};

export default fetchGetHits;
