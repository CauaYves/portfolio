import styled from "styled-components";

const Links = ({ display, color, textColor }) => {
  return (
    <Main display={display} color={color} textColor={textColor}>
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
    color: ${(props) => props.color};
    &:before {
      background-color: ${(props) => props.textColor};
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => props.display};
    align-items: baseline !important;
    padding: 50px 0px 0px 70px;
  }
`;

export default Links;
