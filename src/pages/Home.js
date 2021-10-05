import React from "react";
import { useEffect } from "react";
import Main from "../components/Main";
import Cards from "../components/Cards";
import Counts from "../components/Counts";
import useStyles  from '../css/styles'


function Home() {
  const classes = useStyles()
  useEffect(()=> window.scrollTo(0,0),[]);
  return (
    <div className={classes.home_main_div}>
      <Main />
      <Cards />
      <Counts />
    </div>
  );
}

export default Home;
