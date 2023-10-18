import styled from "styled-components";
import iconSrc from "../../../public/nodejs.svg";
import { useEffect, useState } from "react";
import Links from "./links";
import COLORS from "@/constants/colors";
import Image from "next/image";

export default function NavBar() {
  const [showSideScreen, setShowSideScreen] = useState(false);

  return (
    <Nav>
      <Left>
        <Image src={iconSrc} alt="icon" width={41} height={45} />
        <h1>Yves</h1>
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

  box-shadow: 4px 5px 9px #6a6a6a25;
  position: relative;
`;

const Left = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  h1 {
    margin-left: 10px;
    color: ${COLORS.text};
  }
  img {
    color: red;
  }
`;

const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  span {
    width: 30px;
    border: 1px solid ${COLORS.thirty};
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
  background-color: ${COLORS.sixty};
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
      color: white;
      font-weight: 600;
    }
  }
`;
