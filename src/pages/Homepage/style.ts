import styled from "styled-components";

const Styled = {
  MainContainer: styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
  `,
  FlexContainer: styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    button {
      font-size: 15px;
      font-weight: 700;
      margin: 0 5px;
    }
    p.results {
      font-weight: 700;
      font-size: 18px;
    }
  `,
  CenteringDiv: styled.div`
    width: 300px;
  `,
};

export default Styled;
