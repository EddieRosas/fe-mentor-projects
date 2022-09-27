import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-blue);
  padding: 24px 24px 30px;
  border-radius: 12px;
`;

export const Input = styled.input`
  appearance: none;
`;

export const Circle = styled.div`
  align-items: center;
  background-color: hsl(211deg 19% 22% / 93%);
  border-radius: 50%;
  color: var(--light-grey);
  display: flex;
  height: 2.5rem;
  justify-content: center;
  width: 2.5rem;

  label& {
    color: var(--light-grey);
    font-weight: 700;

    &:hover {
      background-color: var(--light-grey);
      color: var(--white);
      cursor: pointer;
    }

    ${Input}:checked + & {
      background-color: var(--orange);
      color: var(--white);
    }
  }

  @media screen and (min-width: 768px) {
    height: 3.125rem;
    width: 3.125rem;
  }
`;

export const Hgroup = styled.hgroup`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const Heading = styled.h1`
  color: var(--white);
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.05em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Lead = styled.p`
  color: var(--light-grey);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  ${Heading} + & {
    margin-top: 21px;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: 18px;
  border: none;
  margin-bottom: 22px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: hsl(25, 97%, 53%);
  border-radius: 22px;
  color: hsl(0, 0%, 100%);
  border: 0;
  font-size: 14px;
  padding: 15px;
  line-height: 15px;
  cursor: pointer;
  width: 100%;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  &:not(:disabled):hover {
    background-color: var(--white);
    color: var(--orange);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
