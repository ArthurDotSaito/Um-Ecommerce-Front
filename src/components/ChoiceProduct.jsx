import { useState } from "react";
import styled from "styled-components";
import "animate.css";
import { SECONDARY_FONT_COLOR, PRIMARY_COLOR } from "../constants/colors";
import { TRANSITION_DEFAULT } from "../constants/params";
import Score from "./Score";
import IonIcon from "@reacticons/ionicons";

export default function ChoiceProduct({ product, closeFunction }) {
  const { title, description, price, score, img } = product;
  const [quantity, setQuantity] = useState(1);
  const [closeContainer, setCloseContainer] = useState(false);

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newProduct = {
      idProduct: product._id,
      quantity: quantity,
    };

    if (cart) {
      const findedSearch = cart.find(
        (order) => order.idProduct === product._id
      );

      if (findedSearch) {
        const index = cart.indexOf(findedSearch);
        cart[index].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }

      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([newProduct]));
    }
  }

  return (
    <StyledChoiceProduct img={img}>
      <div
        className={`container animate__animated animate__fadeInUpBig ${
          closeContainer && "animate__fadeOutDownBig"
        }`}
      >
        <div className="container__image" />

        <div className="container__content">
          <button
            className="closeWindow"
            onClick={() => {
              setCloseContainer(true);
              setTimeout(() => closeFunction(), 350);
            }}
          >
            <IonIcon name="close-circle-outline" />
          </button>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="content__info">
            <span className="price">
              R$ {price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>

            <Score score={score} />
          </div>

          <div className="container__content__controllers">
            <div className="quantity_controller">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button
              className="addProductInCart"
              onClick={() => {
                addToCart();
                setCloseContainer(true);
                setTimeout(() => closeFunction(), 350);
              }}
            >
              <span>Adicionar</span>
              <span>
                R$
                {(price * quantity).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </button>
          </div>
        </div>
      </div>
    </StyledChoiceProduct>
  );
}

const StyledChoiceProduct = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;

  .container {
    position: relative;
    display: flex;

    width: 80%;
    height: 80%;

    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(50px);
    border-radius: 10px;

    --animate-duration: 0.35s;

    .closeWindow {
      position: absolute;
      top: 16px;
      right: 32px;

      font-size: 24px;
      color: ${PRIMARY_COLOR};

      background: inherit;
      cursor: pointer;
    }

    .container__image {
      width: 50%;
      background: url(${(props) => props.img});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .container__content {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      width: 50%;
      padding: 16px 32px;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: white;

      h2 {
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 700;
        font-size: 24px;
        line-height: 27px;
        color: #000;

        margin-bottom: 16px;
      }

      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: ${SECONDARY_FONT_COLOR};

        margin-top: 10px;
      }

      .content__info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 16px;

        .price {
          font-weight: 700;
          font-size: 14px;
          color: #000000;
        }
      }
    }

    .container__content__controllers {
      display: flex;
      justify-content: flex-end;

      margin-top: auto;

      .addProductInCart {
        display: flex;
        justify-content: space-between;

        width: 210px;
        span:first-child {
          margin-right: 32px;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        color: white;

        padding: 11px 20px;

        min-width: 120px;
        height: 49px;

        background: ${PRIMARY_COLOR};
        border-radius: 10px;
        cursor: pointer;
        transition: ${TRANSITION_DEFAULT};

        &:hover {
          transform: scale(1.1);
        }
      }

      .quantity_controller {
        display: flex;
        align-items: center;

        border-radius: 10px;

        button {
          font-size: 20px;
          font-weight: 700;
          color: ${PRIMARY_COLOR};

          background: none;

          :hover {
            transform: none;
          }
        }

        span {
          width: 18px;
          text-align: center;
        }
      }
    }
  }
`;
