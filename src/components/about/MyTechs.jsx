import styled from "styled-components";
import { useDarkMode } from "@/context/colors-context";
import TechItem from "./TechItem";
import technologies from "@/constants/technologies";

export default function MyTechs() {
  return (
    <MyTechsContainer>
      {technologies.map((tech) => {
        return <TechItem key={tech.tech} photo={tech.img} name={tech.tech} />;
      })}
    </MyTechsContainer>
  );
}

const MyTechsContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
