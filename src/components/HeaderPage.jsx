import { Link } from "react-router-dom";
import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";

import logo from "../assets/foodLogo.svg";
import { PRIMARY_COLOR } from "../constants/colors";
import { TRANSITION_DEFAULT } from "../constants/params";

export default function HeaderPage() {
  return (
    <StyledHeaderPage>
      <Link className="logo" to="#">
        <img src={logo} alt="Logo food" />
      </Link>

      <nav>
        <Link to="#">Por quê Food</Link>
        <Link className="selected" to="#">
          Menu
        </Link>
        <Link to="#">Contato</Link>
      </nav>

      <div>
        <button>
          <IonIcon name="log-out-outline" color={"white"} size={14} />
          Sair
        </button>
      </div>
    </StyledHeaderPage>
  );
}

const StyledHeaderPage = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 45px;

  .logo {
    transition: ${TRANSITION_DEFAULT};
    &:hover {
      transform: scale(1.1);
    }
  }

  nav {
    display: flex;

    a {
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      color: black;

      margin-right: 55px;
      transition: ${TRANSITION_DEFAULT};
    }

    a.selected {
      color: ${PRIMARY_COLOR};
    }

    a:last-child {
      margin-right: 0;
    }

    a:hover {
      transform: scale(1.1);
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

    width: 120px;
    height: 49px;

    background: ${PRIMARY_COLOR};
    border-radius: 50px;
    cursor: pointer;
    transition: ${TRANSITION_DEFAULT};

    span {
      margin-right: 5px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
