import NavBar from "@/components/organisms/navbar";
import React from "react";
import Main from "@/components/organisms/main";
import AboutMe from "@/components/organisms/aboutMe";
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Main />
      <AboutMe />
    </React.Fragment>
  );
}
