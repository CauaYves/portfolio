import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";
import Image from "next/image";
import github from "../../../public/Git.svg";
import linkedin from "../../../public/Linkedin.svg";
import discord from "../../../public/discord.svg";

export default function Hello() {
  const { colors } = useDarkMode();
  return (
    <Main>
      <Top $color={colors.text}>
        <p>Olá visitante,</p>
        <h1>
          EU SOU
          <br /> DESENVOLVEDOR FULL STACK
        </h1>
        <p>Seja bem vindo ao meu portfólio</p>
      </Top>

      <Bottom>
        <Image src={github} alt="github" />
        <Image src={linkedin} alt="linkedin" />
        <Image src={discord} alt="discord" />
      </Bottom>
    </Main>
  );
}

const Main = styled.div`
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    align-items: left;
  }
`;

const Top = styled.div`
  z-index: 2;
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }
  @media (min-width: 768px) {
    h1 {
      line-height: 0.9;
      font-size: 4.5em;
    }
  }

  p {
    color: ${(props) => props.$color};
    font-size: large;
    color: ${(props) => props.$color};
    text-shadow: 1px 1px 2px #007acc3f;
    font-weight: 600;
  }
`;

const Bottom = styled.div`
  display: flex;
  width: 200px;
`;
