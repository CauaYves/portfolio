import COLORS from "@/constants/colors";
import styled from "styled-components";

const Links = ({ display }) => {
  return (
    <Main display={display}>
      <a href="#">Home</a>
      <a href="#">Projetos</a>
      <a href="#">Contato</a>
      <a href="#">Sobre mim</a>
    </Main>
  );
};

const Main = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  a {
    position: relative;
    margin-right: 40px;
    color: ${COLORS.textContrast};
    text-shadow: 1px 1px 2px #007acc3f;

    &:before {
      content: "";
      position: absolute;
      bottom: -2px;
      height: 2px;
      width: 100%;
      background-color: ${COLORS.text};
      transform: scaleX(0);
      transition: transform 0.2s linear;
    }

    &:hover:before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => props.display};
    align-items: baseline !important;
    padding: 50px 0px 0px 70px;
  }
`;

export default Links;
