import React from "react";
import Header from "../../components/Header/Header";
import BioInfo from "../../components/BioInfo/BioInfo";
import IdeaSources from "../../components/IdeaSources/IdeaSources";
import ChartsNavigation from "../../components/ChartsNavigation/ChartsNavigation";
import classes from "./AsideContainer.module.css";
import { motion } from "framer-motion";

const asideContainer = () => (
  <motion.div
    className={classes.Aside}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
  >
    <Header />
    <BioInfo />
    <IdeaSources />
    <ChartsNavigation />
  </motion.div>
);

export default asideContainer;
