import styled from "styled-components";

export const Form = styled.form``;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background-color: var(--very-light-grayish-cyan);
    width: 311px;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* padding-right: 16px; */
  }

  input {
    border: none;
    background-color: inherit;
    font-family: inherit;
    text-align: right;
    outline: none;
    font-size: 24px;
    color: var(--very-dark-cyan);
  }
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

  input[type="radio"]:checked + label {
    background-color: var(--dark-grayish-cyan);
    color: var(--white);
  }

  label {
    display: block;
    text-align: center;
    background-color: var(--very-dark-cyan);
    width: 146px;
    color: white;
    padding: 6px;
    border-radius: 8px;
    font-size: 20px;

    @media (hover: hover) {
      &:hover {
        color: var(--very-dark-cyan);
        background-color: var(--grayish-cyan);
      }
    }
  }
`;
