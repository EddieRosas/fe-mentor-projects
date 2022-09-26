import React from 'react';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import RatingCard from "./components/RatingCard";
import ThankYouCard from './components/ThankYouCard';

const App = () => {
  const [rating, setRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState("");

  const addActiveClass = (currentRating) => {
    let currentActiveLabel = document.getElementsByClassName('active')[0];
    if (currentActiveLabel) currentActiveLabel.classList.remove('active')
    currentRating.parentElement.classList.add('active');
  }

  const handleChange = e => {
    addActiveClass(e.target)
    setSelectedRating(e.target.value);
  }

  const handleSubmit = () => {
    setRating(true);
  }

  return (
      <>
        <GlobalStyle />
        {rating ? (
          <ThankYouCard selectedRating={selectedRating} />
        ) : (
          <RatingCard
          selectedRating={selectedRating}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />
        )}
      </>
  );
};

export default App;
