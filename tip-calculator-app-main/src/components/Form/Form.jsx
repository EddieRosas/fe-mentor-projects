import { Fieldset, Input, OptionRow, Option } from "./style";

export function Form({
  setBillTotal,
  percent,
  custom,
  setNumberOfPeople,
  onChange,
}) {
  return (
    <div>
      <form>
        <Input>
          <label htmlFor="bill">Bill</label>
          <input
            type="text"
            id="bill"
            onChange={(e) => setBillTotal(e.currentTarget.value)}
          />
        </Input>
        <Fieldset>
          <p>Select Tip %</p>
          <OptionRow>
            <Option>
              <input
                onChange={onChange}
                type="radio"
                name="percentage"
                id="5-percent"
                value={5}
                checked={percent === 0.05}
              />
              <label htmlFor="5-percent">5%</label>
            </Option>

            <Option>
              <input
                onChange={onChange}
                type="radio"
                name="percentage"
                id="10-percent"
                value={10}
                checked={percent === 0.1}
              />
              <label htmlFor="10-percent">10%</label>
            </Option>
          </OptionRow>

          <OptionRow>
            <Option>
              <input
                onChange={onChange}
                type="radio"
                name="percentage"
                id="15-percent"
                value={15}
                checked={percent === 0.15}
              />
              <label htmlFor="15-percent">15%</label>
            </Option>

            <Option>
              <input
                onChange={onChange}
                type="radio"
                name="percentage"
                id="25-percent"
                value={25}
                checked={percent === 0.25}
              />
              <label htmlFor="25-percent">25%</label>
            </Option>
          </OptionRow>

          <OptionRow>
            <Option>
              <input
                onChange={onChange}
                type="radio"
                name="percentage"
                id="50-percent"
                value={50}
                checked={percent === 0.5}
              />
              <label htmlFor="50-percent">50%</label>
            </Option>

            <Option>
              {custom ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter Percentage"
                    onChange={onChange}
                    id="other-text"
                  />
                </>
              ) : (
                <>
                  <input
                    onChange={onChange}
                    type="radio"
                    name="percentage"
                    id="other-radio"
                  />
                  <label htmlFor="other-radio">Custom</label>
                </>
              )}
            </Option>
          </OptionRow>
        </Fieldset>
        <Input>
          <label htmlFor="people-count">Number of people</label>
          <input
            type="number"
            min="1"
            id="people-count"
            name="people-count"
            onChange={(e) => setNumberOfPeople(e.currentTarget.value)}
          />
        </Input>
      </form>
    </div>
  );
}
