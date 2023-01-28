import styled from "styled-components";

import star from "../assets/starIcon.svg";
import { TRANSITION_DEFAULT } from "../constants/params";

export default function FoodCard({ title, description, score, price, img }) {
  return (
    <StyledFoodCard img={img}>
      <div className="wrapper">
        <div className="img" />

        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="info">
            <p>{price}</p>
            <div className="score">
              <img src={star} alt="estrelas" />
              <span>{score}</span>
            </div>
          </div>
        </div>
      </div>
    </StyledFoodCard>
  );
}

const StyledFoodCard = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 40%;

  padding-bottom: calc(0.128 * 100%);
  margin-right: 28px;

  cursor: pointer;
  transition: ${TRANSITION_DEFAULT};

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    transform: scale(1.1);
  }

  .content {
    width: 100%;
  }

  & > .wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;

    .img {
      flex-shrink: 0;
      height: 100%;
      width: calc(0.261892584 * 100%);
      border-radius: 10px;

      background: linear-gradient(
          359.23deg,
          rgba(0, 0, 0, 0.7) 0.74%,
          rgba(0, 0, 0, 0.212344) 59.35%,
          rgba(0, 0, 0, 0) 99.45%
        ),
        url(${(props) => props.img});
      background-size: cover;
    }

    div {
      display: flex;
      flex-direction: column;

      padding: 0 10px;

      h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        color: #000000;
      }

      p {
        font-family: "Poppins";
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #000000;

        margin-top: 10px;
      }

      .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin-top: auto;

        p {
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;

          color: #000000;
        }

        .score {
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
      }
    }
  }
`;
