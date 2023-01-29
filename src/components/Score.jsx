import styled from "styled-components";
import star from "../assets/starIcon.svg";

export default function Score({ score }) {
  return (
    <StyledScore>
      <img src={star} alt="estrelas" />
      <span>{score}</span>
    </StyledScore>
  );
}

const StyledScore = styled.div`
  & {
    flex-shrink: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 54px;
    height: 24px;

    background: #fff2e5;
    border: 1px solid #ffae00;
    border-radius: 5px;

    img {
      width: 14px;
      height: 14px;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      display: flex;
      align-items: center;

      margin-left: 5px;

      color: #000000;
    }
  }
`;
