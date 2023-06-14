import axios from 'axios';

const API_KEY = '24435694-017d2bab3470121913608c0c0';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
