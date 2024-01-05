import styled from "styled-components";
import Image from "next/image";
import { useDarkMode } from "@/context/colors-context";

export default function TechItem({ photo, name }) {
  const { colors } = useDarkMode();

  return (
    <TechItemContainer>
      <Pentagon primarycolor={colors.sixty} secondarycolor={colors.thirty}>
        <PentagonInsider>
          <Image src={photo} alt="technology" width={100} height={100} />
        </PentagonInsider>
      </Pentagon>
      <p>{name}</p>
    </TechItemContainer>
  );
}

const TechItemContainer = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 15px;
  }
`;

const Pentagon = styled.div`
  width: 90px;
  height: 100px;
  background: radial-gradient(
    circle,
    ${(props) => props.primarycolor},
    ${(props) => props.secondarycolor}
  );

  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

const PentagonInsider = styled(Pentagon)`
  width: 85px;
  height: 95px;

  img {
    width: 55%;
  }
`;
