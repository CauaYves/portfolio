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
    margin-right: 40px;
    color: ${COLORS.textContrast};
    text-shadow: 1px 1px 2px #007acc3f;
  }

  //se a tela for menor que essa tamanho indicado, aplique esses estilos.
  @media (max-width: 768px) {
    display: ${(props) => props.display};
  }
`;

export default Links;
