import IonIcon from "@reacticons/ionicons";
import styled from "styled-components";

import logo from "../assets/foodLogo.svg";
import { PRIMARY_COLOR, SECONDARY_FONT_COLOR } from "../constants/colors";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <img src={logo} alt="Food" />

        <p>
          Nosso trabalho é encher sua barriga com comida deliciosa e com entrega
          rápida e gratuita.
        </p>

        <div className="social">
          <IonIcon name="logo-instagram" size={18} />
          <IonIcon name="logo-facebook" size={18} />
          <IonIcon name="logo-twitter" size={18} />
        </div>
      </div>

      <div className="menu-list">
        <ul>
          <li>Sobre</li>
          <li>Sobre nós</li>
          <li>Notícias</li>
          <li>Menu</li>
        </ul>
        <ul>
          <li>Suporte</li>
          <li>Contas</li>
          <li>Central de suporte</li>
          <li>Feedback</li>
          <li>Acessibilidade</li>
        </ul>
        <ul>
          <li>Contato</li>
          <li>Pergunta ou feedback?</li>
          <li>Nós adoraríamos ouvir.</li>
          <button></button>
        </ul>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 1250px;
  height: 235px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  p {
    width: 300px;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;

    color: ${SECONDARY_FONT_COLOR};
  }

  .social {
    span {
      margin-right: 40px;

      :last-child {
        margin-right: 0;
      }
    }

    svg {
      fill: ${PRIMARY_COLOR};
    }
  }

  .menu-list {
    display: flex;

    ul {
      margin-left: 70px;

      li {
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: ${SECONDARY_FONT_COLOR};
        margin-bottom: 12px;
        cursor: pointer;

        :first-child {
          font-weight: 600;
          font-size: 20px;
          line-height: 22px;
          color: black;
          margin-bottom: 24px;
        }
      }
    }
  }
`;
