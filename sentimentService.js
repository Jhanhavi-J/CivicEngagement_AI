import axios from 'axios';

const analyze = async (text) => {
  const response = await axios.post('/api/sentiment/analyze', { text });
  return response.data;
};

export default {
  analyze,
};