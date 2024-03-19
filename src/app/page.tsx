import styles from "./page.module.css";
import NavBar from "@/components/organisms/navbar";
import React from "react";
import Main from "@/components/organisms/main";
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <Main />
    </React.Fragment>
  );
}
