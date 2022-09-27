import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-blue);
  padding: 24px 24px 30px;
  border-radius: 12px;
  text-align: center;
`;

export const ReceiptImage = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const UserRating = styled.div`
  background-color: hsl(211deg 19% 22% / 93%);
  border-radius: 35px;
  padding: 8px 14px;
  width: fit-content;
  margin: 0 auto 22px;
  color: var(--orange);
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
