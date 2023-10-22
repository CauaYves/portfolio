import styled from "styled-components";
import NavBar from "@/components/navbar";
import Main from "@/components/main";
import { useDarkMode } from "@/context/colors-context";

export default function Home() {
  const { colors } = useDarkMode();

  return (
    <Body color={colors.sixty}>
      <NavBar />
      <Main />
    </Body>
  );
}

const Body = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.color};
`;
