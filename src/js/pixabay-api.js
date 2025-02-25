import axios from 'axios';
import { refs } from '../main';
axios.defaults.baseURL = 'https://pixabay.com/';
export function getImages(query) {
  const END_POINT = 'api/';
  const params = new URLSearchParams({
    key: '16827506-9469cc67c3ec90b2828a9ad0f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return axios.get(`${END_POINT}?${params}`).then(resp => {
    refs.spinner.classList.remove('is-pending');
    if (!resp.data.hits || resp.data.hits.length === 0) {
      throw new Error();
    }
    return resp.data.hits;
  });
}
