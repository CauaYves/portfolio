import Image from "next/image";
import styled from "styled-components";
import photo from "../../../public/photo.jpg";
import { useDarkMode } from "@/context/colors-context";
import Biography from "./Biography";
import MyTechs from "./MyTechs";
export default function About() {
  const { colors } = useDarkMode();

  return (
    <AboutWrapper color={colors.light}>
      <Introduction>
        <Pentagon primarycolor={colors.twenty} secondarycolor={colors.thirty}>
          <PentagonInsider>
            <Image src={photo} alt="My photo" width={135} />
          </PentagonInsider>
        </Pentagon>
        <HorizontalBar
          primarycolor={colors.shadow}
          secondarycolor={colors.thirty}
        ></HorizontalBar>
        <Biography />
        <MyTechs />
      </Introduction>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  background-color: ${(props) => props.color};

  box-shadow: 5px 5px 10px 0px rgb(248, 0, 0) outset;

  width: 100%;
  border-top: 1px solid #00000036;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Pentagon = styled.div`
  width: 150px;
  height: 150px;
  background: radial-gradient(
    ellipse at center,
    ${(props) => props.primarycolor},
    ${(props) => props.secondarycolor}
  );
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

const PentagonInsider = styled(Pentagon)`
  width: 135px;
  height: 135px;
  background-color: #c6c8cb;
`;

const HorizontalBar = styled.div`
  background-image: url("tech-background.jpeg");
  background-position: center center;
  height: 60px;
  width: 100%;

  position: absolute;
  top: 75px;
  z-index: 998;

  border: 2px solid #0000002d;
`;
