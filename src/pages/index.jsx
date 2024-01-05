import styled from "styled-components";
import NavBar from "@/components/navbar";
import Main from "@/components/main";
import About from "@/components/about";
import { useDarkMode } from "@/context/colors-context";
import Footer from "@/components/footer";

export default function Home() {
  const { colors } = useDarkMode();

  return (
    <Body color={colors.sixty} gradient={colors.thirty}>
      <NavBar />
      <Main />
      <About />
      <Footer />
    </Body>
  );
}

const Body = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
  background-image: linear-gradient(
    120deg,
    ${(props) => props.color},
    ${(props) => props.gradient},
    ${(props) => props.gradient},
    ${(props) => props.color}
  );
`;
