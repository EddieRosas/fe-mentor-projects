import { useEffect, useState } from "react";
import "./App.css";

// validations needed
// run calculation when all fields are filled and when
// all fields are filled and any other value changes

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
    <div className="App">
      <div className="card">
        <form id="calculator">
          <fieldset>
            <div>
              <label htmlFor="bill">Bill </label>
              <input
                type="text"
                id="bill"
                onChange={(e) => setBillTotal(e.currentTarget.value)}
              />
            </div>
            <p>Select Tip %</p>
            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="percentage"
                id="5-percent"
                value={5}
              />
              <label htmlFor="5-percent">5%</label>
            </div>

            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="percentage"
                id="10-percent"
                value={10}
              />
              <label htmlFor="10-percent">10%</label>
            </div>

            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="percentage"
                id="15-percent"
                value={15}
              />
              <label htmlFor="15-percent">15%</label>
            </div>

            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="percentage"
                id="25-percent"
                value={25}
              />
              <label htmlFor="25-percent">25%</label>
            </div>

            <div>
              <input
                onChange={handleChange}
                type="radio"
                name="percentage"
                id="50-percent"
                value={50}
              />
              <label htmlFor="50-percent">50%</label>
            </div>

            <div>
              {custom ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter Percentage"
                    onChange={handleChange}
                    id="other-text"
                  />
                </>
              ) : (
                <>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="percentage"
                    id="other-radio"
                  />
                  <label htmlFor="custom">Custom</label>
                </>
              )}
            </div>
            <br />

            <input
              type="number"
              id="people-count"
              name="people-count"
              onChange={(e) => setNumberOfPeople(e.currentTarget.value)}
            />
            <label htmlFor="people-count">Number of people</label>

            <br />
          </fieldset>
        </form>

        <h2>Tip: ${tip > 0 ? tip : "0.00"}</h2>
        <h2>
          Total Per Person: ${totalPerPerson > 0 ? totalPerPerson : "0.00"}
        </h2>
      </div>
    </div>
  );
}

export default App;
