import React from "react";
import { GlobalStyle } from "./styles/global";
import { Container, RatingCard, ThankYouCard } from "./components";

function App() {
  const [selectedRating, setSelectedRating] = React.useState();

  return (
    <>
      <GlobalStyle />

      <Container>
        {selectedRating ? (
          <ThankYouCard selectedRating={selectedRating} />
        ) : (
          <RatingCard setRating={setSelectedRating} />
        )}
      </Container>
    </>
  );
}

export default App;
