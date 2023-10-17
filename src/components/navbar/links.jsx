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

  //se a tela for menor que essa tamanho indicado, aplique esses estilos.
  @media (max-width: 768px) {
    display: ${(props) => props.display};
  }
`;

export default Links;
