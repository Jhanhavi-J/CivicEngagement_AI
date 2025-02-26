const express = require('express');
const router = express.Router();
const events = require('../data/events.json');

router.get('/events', (req, res) => {
  res.json(events);
});

module.exports = router;