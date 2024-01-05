import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";

export default function Footer() {
  const { colors } = useDarkMode();
  return (
    <FooterContainer>
      <LinksImageContainer background={colors.sixty}>
        <Anchor
          href="https://api.whatsapp.com/send?phone=24992287640"
          textcolor={colors.text}
        >
          whatsapp
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/cauayves/"
          textcolor={colors.text}
        >
          linkedin
        </Anchor>
        <Anchor href="https://github.com/CauaYves" textcolor={colors.text}>
          github
        </Anchor>
        <Anchor href="#" textcolor={colors.text}>
          email
        </Anchor>
      </LinksImageContainer>
      <p>Todos os direitos reservados</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  p {
    text-align: center;
    color: white;
    font-size: 15px;
    position: absolute;
    bottom: 0;
  }
`;

const LinksImageContainer = styled.div`
  background-color: ${(props) => props.background};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Anchor = styled.a`
  color: ${(props) => props.textcolor};
  &:before {
    background-color: ${(props) => props.textcolor};
  }
`;
