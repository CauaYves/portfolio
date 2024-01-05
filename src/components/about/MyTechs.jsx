import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";
import TechItem from "./TechItem";
import technologies from "@/constants/technologies";

export default function MyTechs() {
  return (
    <MyTechsContainer>
      <h1>Minhas Habilidades</h1>
      <TechContainer>
        {technologies.map((tech) => {
          return <TechItem key={tech.tech} photo={tech.img} name={tech.tech} />;
        })}
      </TechContainer>
    </MyTechsContainer>
  );
}

const MyTechsContainer = styled.div`
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
