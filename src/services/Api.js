import axios from "axios";

const API_KEY = "20362971-ecfbb08827ff6b5f6a4a06bfb";
axios.defaults.baseURL = `https://pixabay.com/`;

const fetchGetHits = ({ query, page, perPage = 12 }) => {
  return axios.get(`/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`).then((response) => response.data);
};

export default fetchGetHits;
