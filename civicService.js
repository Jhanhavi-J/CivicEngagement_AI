import axios from 'axios';

const getEvents = async () => {
  const response = await axios.get('/api/civic/events');
  return response.data;
};

export default {
  getEvents,
};
