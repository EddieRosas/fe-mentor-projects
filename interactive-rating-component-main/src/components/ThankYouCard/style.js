import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--darkBlue);
  padding: 32px 28px 20px 28px;
  height: 100%;
  width: 100%;
  border-radius: 28px;
  max-width: 415px;
  text-align: center;

  .receipt-image {
    margin-top: 18px;
    margin-bottom: 18px;
  }

  .user-rating {
    background-color: #2e3843ed;
    border-radius: 35px;
    padding: 8px 14px;
    width: fit-content;
    margin: 0 auto;
    color: var(--orange);
  }

  h2 {
    color: var(--white);
    font-weight: 700;
    margin: 18px 0 10px 0;
  }

  p {
    color: var(--lightGrey);
    margin-bottom: 8px;
    line-height: 22px;
    margin-bottom: 18px;
  }
`
