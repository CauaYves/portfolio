import styled from "styled-components";
import icon from "../../../public/nodejs.svg";
import { useEffect, useState } from "react";
import Links from "./links";

export default function NavBar() {
  const [showSideScreen, setShowSideScreen] = useState(false);
  const [atualScreenSize, setAtualScreenSize] = useState(0);

  return (
    <Nav>
      <Left>
        <img src={icon.src} alt="icon" />
        <h1>Yves </h1>
      </Left>

      <Links display={"none"} />

      <Burguer
        onClick={() => {
          setShowSideScreen(!showSideScreen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Burguer>

      <SideScreen show={showSideScreen}>
        <Links display={"block"} />
      </SideScreen>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 60px;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: gray;

  position: relative;
`;

const Left = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  span {
    width: 30px;
    border: 1px solid white;
    margin: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const SideScreen = styled.div`
  background-color: #38387844;
  width: 70%;
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
  @media (min-width: 768px) {
    display: none;
  }
  display: ${(props) => (props.show ? "block" : "none")};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin: 15px 0px;
    }
  }
`;
