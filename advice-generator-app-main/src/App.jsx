import { GlobalStyle } from "./styles/global";
import { Container, AdviceCard } from "./components";
import { useCallback, useEffect, useReducer } from "react";

function adviceReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return { data: undefined, error: undefined, state: "loading" };
    case "resolve":
      return { data: action.payload, error: undefined, state: "success" };
    case "reject":
      return { data: undefined, error: action.payload, state: "failure" };
    default:
      return state;
  }
}

function App() {
  const [response, dispatch] = useReducer(adviceReducer, {
    data: undefined,
    error: undefined,
    state: "idle",
  });

  const advice = response.state === "success" ? response.data.slip : undefined;

  const getAdvice = useCallback(() => {
    dispatch({ type: "fetch" });
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((payload) => dispatch({ type: "resolve", payload }))
      .catch((payload) => dispatch({ type: "reject", payload }));
  }, []);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <AdviceCard
          getAdvice={getAdvice}
          advice={advice}
          loading={response.state !== "success"}
        />
      </Container>
    </>
  );
}

export default App;
