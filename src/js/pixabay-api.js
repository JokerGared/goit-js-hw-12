import axios from 'axios';
import { per_page, refs } from '../main';
axios.defaults.baseURL = 'https://pixabay.com/';
export async function getImages(query, page) {
  const END_POINT = 'api/';
  const params = new URLSearchParams({
    key: '16827506-9469cc67c3ec90b2828a9ad0f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  });
  try {
    const resp = await axios.get(`${END_POINT}?${params}`);
    refs.spinner.classList.remove('is-pending');
    if (!resp.data.hits || resp.data.hits.length === 0) {
      throw new Error('no data');
    }
    return resp.data;
  } catch (error) {
    refs.spinner.classList.remove('is-pending');
    console.error('Network error occured', error);
    throw new Error('Network problems');
  }
}
