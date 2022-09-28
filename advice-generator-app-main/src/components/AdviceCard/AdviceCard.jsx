import { useState, useEffect, useRef } from "react";
import { Container, Spinner, Heading, Advice, Divider, Button } from "./style";

// TODO:
// initial render fetches data twice
// handling loading state is trash
// how to handle needing to wait/click twice
//   before making another successful api call

export function AdviceCard() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setLoading(false);
      setAdvice(data.slip);
    } catch (error) {
      console.log("ya messed up");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleClick() {
    setLoading(true);
    getData();
  }

  return (
    <Container>
      {loading ? (<Spinner />) :
        <>
          <Heading>Advice #{advice.id}</Heading>
          <Advice>{advice.advice}</Advice>
        </>
      }
      <Divider>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </Divider>
      <Button onClick={handleClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </Button>
    </Container>
  );
}
