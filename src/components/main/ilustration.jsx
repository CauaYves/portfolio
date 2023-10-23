import MousePositionTracker from "./Mouse"; // Supondo que o componente esteja em um arquivo separado
import styled from "styled-components";
import Image from "next/image";
import developer from "../../../public/developer.svg";
import { useEffect, useState } from "react";

export default function Ilustration() {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const handleMousePositionChange = (position) => {
    setMousePosition(position);
  };

  useEffect(() => {
    console.log(mousePosition);
  }, [mousePosition]);

  return (
    <Main>
      <MousePositionTracker onMousePositionChange={handleMousePositionChange} />
      <Image src={developer} alt="developer"></Image>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  height: 700px;

  img {
    position: absolute;

    @media (min-width: 768px) {
      transform: translate(-100%, -50%);
    }

    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;
