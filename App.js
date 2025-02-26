import React from 'react';
import CivicInfo from './components/CivicInfo';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <h1>Civic Engagement and Awareness Project</h1>
      <CivicInfo />
      <SentimentAnalysis />
    </div>
  );
}

export default App;