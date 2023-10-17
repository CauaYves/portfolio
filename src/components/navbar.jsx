import styled from "styled-components";
import icon from "../../public/nodejs.svg";

export default function NavBar() {
  return (
    <Nav>
      <Left>
        <img src={icon.src} alt="icon" />
        <h1>Yves </h1>
      </Left>
      <Right>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
        <a href="#">Sobre mim</a>
      </Right>

      <Burguer>
        <span></span>
        <span></span>
        <span></span>
      </Burguer>
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
`;

const Left = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

const Right = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  //se a tela for menor que essa tamanho indicado, aplique esses estilos.
  @media (max-width: 768px) {
    display: none;
  }
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
