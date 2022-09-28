import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-grayish-blue);
  padding: 40px 28px 30px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  width: 375px;

  @media screen and (min-width: 768px) {
    width: 540px;
    padding: 40px 32px 30px;
  }
`;

export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #52ffa8 transparent #52ffa8 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;
  margin: 0 auto 24px auto;
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
  }
}
`

export const Heading = styled.h4`
  color: var(--neon-green);
  font-size: 11px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
  `

export const Advice = styled.main`
  color: var(--light-cyan);
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    /* font-weight: 600; */
    letter-spacing: .01em;
  }
`
export const Divider = styled.div`
  margin-bottom: 30px;
`

export const Button = styled.div`
  border-radius: 50%;
  height: 4.125rem;
  width: 4.125rem;
  background-color: var(--neon-green);
  border: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s ease;
  
  &:hover {
    box-shadow: 0rem 0rem 1rem #52ffa8;
    transition: .2s ease;
  }
`
