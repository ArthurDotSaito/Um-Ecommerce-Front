import styled from "styled-components";

import star from "../assets/starIcon.svg";
import { TRANSITION_DEFAULT } from "../constants/params";

export default function PopularFoodCard({ img, title, score, onClick }) {
  return (
    <StyledPopularFoodCard img={img} onClick={onClick}>
      <div className="wrapper">
        <div>
          <p>{title}</p>
          <div className="score">
            <img src={star} alt="estrelas" />
            <span>{score}</span>
          </div>
        </div>
      </div>
    </StyledPopularFoodCard>
  );
}

const StyledPopularFoodCard = styled.div`
  position: relative;

  flex: 1;
  height: calc(288px / 100vh);
  padding-bottom: calc(0.1536 * 100%);
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }

  background: linear-gradient(
      359.23deg,
      rgba(0, 0, 0, 0.7) 0.74%,
      rgba(0, 0, 0, 0.212344) 59.35%,
      rgba(0, 0, 0, 0) 99.45%
    ),
    url(${(props) => props.img});
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  transition: ${TRANSITION_DEFAULT};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .wrapper > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  p {
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;

    color: #ffffff;
  }

  & .score {
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 54px;
    height: 24px;

    background: #fff2e5;
    border-radius: 5px;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      display: flex;
      align-items: center;

      color: #000000;
    }
  }
`;
