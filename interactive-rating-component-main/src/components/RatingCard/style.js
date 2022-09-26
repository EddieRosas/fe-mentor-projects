import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--darkBlue);
  padding: 32px 28px 20px 28px;
  height: 100%;
  width: 100%;
  border-radius: 28px;
  max-width: 420px;

  .circle {
    border-radius: 50%;
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e3843ed;
  }

  h2 {
    color: var(--white);
    font-weight: 700;
    margin: 24px 0 10px 0;
  }

  p {
    color: var(--lightGrey);
    font-weight: 400;
    margin-bottom: 8px;
    line-height: 22px;
  }

  fieldset {
    display: flex;
    justify-content: center;
    gap: 24px;
    border: none;
    margin-top: 24px;
    margin-bottom: 24px;

    label {
      color: var(--lightGrey);
      font-weight: 700;

      &:hover {
        background-color: var(--lightGrey);
        color: var(--white);
        cursor: pointer;
      }
    }

    label.active {
      background-color: var(--orange);
      color: var(--white);
    }

    input {
      appearance: none;
    }
  }

  button {
    background-color: hsl(25, 97%, 53%);
    border-radius: 32px;
    color: hsl(0, 0%, 100%);
    border: 0;
    padding: 10px 0;
    cursor: pointer;
    width: 100%;
    letter-spacing: 1.5px;

    &:hover {
      background-color: var(--white);
      color: var(--orange);
    }
  }

  button.disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
