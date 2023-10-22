import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";
import Hello from "./hello";

export default function Main() {
  const { darkMode, colors } = useDarkMode();

  return (
    <Body color={colors.sixty}>
      <HelloWrapper>
        <Hello />
      </HelloWrapper>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  max-width: 1600px;
  height: 100vh;
  margin: auto;
  background-color: ${(props) => props.color};

  display: flex;

  img {
    width: 500px;
  }
`;

const HelloWrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;

  margin-left: 30px;
`;
