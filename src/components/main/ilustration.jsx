import MousePositionTracker from "./Mouse"; // Supondo que o componente esteja em um arquivo separado
import styled from "styled-components";
import Image from "next/image";
import developer from "../../../public/developer.svg";
import { useState } from "react";

export default function Ilustration() {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const handleMousePositionChange = (position) => {
    setMousePosition(position);
  };

  return (
    <Main
      $positionX={(mousePosition[0] / 100 - 100).toFixed(0)}
      $positionY={(mousePosition[1] / 100 + 20).toFixed(0)}
      $positionXmobile={(mousePosition[0] / 120 + 50 * -1).toFixed(0)}
      $positionYmobile={(mousePosition[1] / 120 + 50 * -1).toFixed(0)}
    >
      <MousePositionTracker onMousePositionChange={handleMousePositionChange} />
      <Image src={developer} alt="developer" height={500}></Image>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  height: 700px;

  img {
    position: absolute;
    @media (min-width: 768px) {
      transform: translate(
        ${(props) => props.$positionX}%,
        ${(props) => props.$positionY}%
      );
    }
    @media (max-width: 768px) {
      margin-top: 200px;
      width: 300px;
      transform: translate(
        ${(props) => props.$positionXmobile}%,
        ${(props) => props.$positionYmobile}%
      );
    }
  }
`;
