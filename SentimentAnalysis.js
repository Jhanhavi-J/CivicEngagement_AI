import React, { useState } from 'react';
import sentimentService from '../services/sentimentService';

function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = async () => {
    const result = await sentimentService.analyze(text);
    setSentiment(result.documents[0].sentiment);
  };

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={analyzeSentiment}>Analyze</button>
      <p>Sentiment: {sentiment}</p>
    </div>
  );
}

export default SentimentAnalysis;