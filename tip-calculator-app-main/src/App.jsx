import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Card, Form, Results } from "./components";

// validations needed

function App() {
  const [custom, setCustom] = useState(false);
  const [billTotal, setBillTotal] = useState(undefined);
  const [percent, setPercent] = useState(undefined);
  const [numberOfPeople, setNumberOfPeople] = useState(undefined);
  const [tip, setTip] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);

  function handleChange(event) {
    if (event.currentTarget.id === "other-radio") {
      setCustom(true);
    } else if (custom && event.currentTarget.type === "radio") {
      setCustom(false);
    }
    setPercent(event.currentTarget.value / 100);
  }

  function calculate() {
    const calculatedTip = (billTotal * percent) / numberOfPeople;
    setTip(calculatedTip.toFixed(2));

    const calculatedTotalPerPerson = billTotal / numberOfPeople + calculatedTip;
    setTotalPerPerson(calculatedTotalPerPerson.toFixed(2));
  }

  useEffect(() => {
    billTotal && percent && numberOfPeople && calculate();
  }, [billTotal, percent, custom, numberOfPeople]);

  return (
    <>
      <GlobalStyle />
      <Card>
        <Form
          onChange={handleChange}
          setBillTotal={setBillTotal}
          custom={custom}
          setNumberOfPeople={setNumberOfPeople}
          percent={percent}
        />
        <Results tip={tip} totalPerPerson={totalPerPerson} />
      </Card>
    </>
  );
}

export default App;
