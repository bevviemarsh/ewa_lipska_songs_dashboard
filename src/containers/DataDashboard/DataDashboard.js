import React from "react";
import AsideContainer from "../AsideContainer/AsideContainer";
import MainContainer from "../MainContainer/MainContainer";
import classes from "./DataDashboard.module.css";

const dataDashboard = () => (
  <div className={classes.Dashboard}>
    <AsideContainer />
    <MainContainer />
  </div>
);

export default dataDashboard;
