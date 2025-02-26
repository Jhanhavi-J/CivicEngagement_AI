const express = require('express');
const app = express();
const port = 3001;

const civicRoutes = require('./routes/civic');
const sentimentRoutes = require('./routes/sentiment');

app.use(express.json());

app.use('/api/civic', civicRoutes);
app.use('/api/sentiment', sentimentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});