import styled from "styled-components";
import NavBar from "@/components/navbar";
export default function Home() {
  return (
    <Main>
      <NavBar />
    </Main>
  );
}

const Main = styled.main`
  background-color: red;
  width: 100vw;
  height: 100vh;
`;
