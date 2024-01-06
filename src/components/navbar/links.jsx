import styled from "styled-components";
import Link from "next/link";
import { useDarkMode } from "@/context/colors-context";

export default function Links({ display }) {
  const { colors } = useDarkMode();

  return (
    <Main $display={display}>
      <Anchor href="#" $textcolor={colors.text}>
        Home
      </Anchor>
      <Anchor href="#" $textcolor={colors.text}>
        Projetos
      </Anchor>
      <Anchor href="#" $textcolor={colors.text}>
        Contato
      </Anchor>
      <Anchor href="#" $textcolor={colors.text}>
        Sobre mim
      </Anchor>
    </Main>
  );
}

const Main = styled.div`
  height: 100%;

  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
    align-items: baseline !important;
    padding: 50px 0px 0px 70px;
  }
`;

const Anchor = styled(Link)`
  color: ${(props) => props.$textcolor};
  &:before {
    background-color: ${(props) => props.$textcolor};
  }
`;
