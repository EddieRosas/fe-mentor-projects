import styled from "styled-components";

export const Form = styled.form``;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;

export const OptionRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

export const Option = styled.div`
  input[type="radio"] {
    appearance: none;
  }

  label {
    background-color: var(--very-dark-cyan);
    color: white;
    padding: 8px;
    border-radius: 8px;
  }
`;
