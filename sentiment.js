const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = '10tTdCZZLE9BhbooKAbP6pzldDeGFuevRKQIu0JkPJhIYvUlI5fuJQQJ99BBACYeBjFXJ3w3AAAaACOG043H';
const endpoint = 'https://civic-engagement-ai.cognitiveservices.azure.com/';

router.post('/analyze', async (req, res) => {
  const { text } = req.body;
  const documents = { documents: [{ id: '1', language: 'en', text }] };

  try {
    const response = await axios.post(`${endpoint}/text/analytics/v3.1/sentiment`, documents, {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
