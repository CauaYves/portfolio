import styled from "styled-components";
import iconSrc from "../../../public/nodejs.svg";
import { useState } from "react";
import Links from "./links";
import Image from "next/image";
import { useDarkMode } from "@/context/colors-context";
import sun from "../../../public/sun.svg";
import moon from "../../../public/moon.svg";

export default function NavBar() {
  const [showSideScreen, setShowSideScreen] = useState(false);
  const { setDarkMode, colors, darkMode } = useDarkMode();

  return (
    <Nav $color={colors.sixty}>
      <Left $color={colors.text}>
        <Image src={iconSrc} alt="icon" width={41} height={45} />
        <h1>Yves</h1>
      </Left>

      <DarkMode onClick={() => setDarkMode(!darkMode)}>
        <Image
          src={darkMode ? moon : sun}
          alt="dark mode or light mode"
          width={30}
        />
      </DarkMode>
      <Links $display={"none"} />
      <Burguer
        onClick={() => {
          setShowSideScreen(!showSideScreen);
        }}
        $color={colors.text}
      >
        <span></span>
        <span></span>
        <span></span>
      </Burguer>
      <SideScreen
        $show={showSideScreen}
        $color={colors.sixty}
        $textcolor={colors.text}
      >
        <Links $display={"none"} />
      </SideScreen>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 100px;
  width: calc(100vw - 40px);
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  background-color: ${(props) => props.$color};

  z-index: 1000;
`;

const Left = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  h1 {
    margin-left: 10px;
    color: ${(props) => props.$color};
  }
`;

const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  span {
    width: 30px;
    border: 1px solid ${(props) => props.$color};
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
  background-color: ${(props) => props.$color};
  width: 70%;
  height: 100vh;

  position: fixed;
  left: ${(props) => (props.$show ? "0" : "-70%")};
  top: 0;

  transition: left 0.5s ease;

  @media (min-width: 768px) {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin: 15px 0px;
      color: ${(props) => props.$textcolor};
      font-weight: 600;
    }
  }
`;

const DarkMode = styled.div`
  cursor: pointer;
`;
