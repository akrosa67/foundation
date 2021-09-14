import React from "react";
import classes from "../css/FoundationStyles.module.css";
import Slide from "../components/Slide";
import { MainAbout } from "./Homepage/MainAbout"
import Environment from "./Environment";

function Main() {
  return (
    <div className={classes.main}>
      <Slide />
      <MainAbout />
      <Environment />
    </div>
  );
}

export default Main;
