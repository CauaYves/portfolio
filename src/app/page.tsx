import NavBar from "@/components/organisms/navbar";
import React from "react";
import Main from "@/components/organisms/main";
import AboutMe from "@/components/organisms/aboutMe";
import Experiences from "@/components/organisms/experiences";
import Projects from "@/components/organisms/projects";
import Technologies from "@/components/organisms/technologies";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Main />
      <AboutMe />
      <Experiences />
      <Projects />
      <Technologies />
    </React.Fragment>
  );
}
