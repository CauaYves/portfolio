import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";
import Hello from "./hello";
import Ilustration from "./ilustration";

export default function Main() {
  const { darkMode, colors } = useDarkMode();

  return (
    <Body color={colors.sixty} gradient={colors.thirty}>
      <HelloWrapper>
        <Hello />
      </HelloWrapper>
      <IlustrationWrapper>
        <Ilustration />
      </IlustrationWrapper>
    </Body>
  );
}

const Body = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }

  width: 100vw;
  max-width: 1600px;
  min-height: 100vh;

  margin: auto;

  background-color: ${(props) => props.color};
  background-image: linear-gradient(
    120deg,
    ${(props) => props.gradient},
    ${(props) => props.color},
    ${(props) => props.color},
    ${(props) => props.gradient}
  );

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    width: 500px;
  }
`;

const HelloWrapper = styled.div`
  min-height: 100vh;
  @media (max-width: 768px) {
    width: auto;
  }
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const IlustrationWrapper = styled.div``;
