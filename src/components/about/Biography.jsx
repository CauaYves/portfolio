import styled from "styled-components";

export default function Biography() {
  const atualJob = "Erudir Tech";
  const text = `Olá, me chamo Cauã Yves, tenho 19 anos, sou formado em desenvolvimento de software e atualmente trabalho na ${atualJob} como desenvolvedor de software.`;

  return (
    <BiographyContainer>
      <h1>Cauã Yves</h1>
      <p>{text}</p>
    </BiographyContainer>
  );
}

const BiographyContainer = styled.div`
  text-align: center;
  p {
    max-width: 880px;
  }
`;
