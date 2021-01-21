import React from "react";
import classes from "./DisplayedInfo.module.css";
import { motion } from "framer-motion";

import MetaTagsContainer from "../../../containers/MetaTagsContainer/MetaTagsContainer";
import metaData from "../../../assets/metaData/metaData";
import homeImg from "../../../assets/img/imgHome.PNG";

const displayedInfo = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className={classes.DisplayedInfo}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MetaTagsContainer
        title={metaData.homeTitle}
        description={metaData.homeDescription}
        imgURL={homeImg}
      />

      <h2>Ewa Lipska - songs data dashboard</h2>
      <p> Please, choose a type of chart to see the data</p>
    </motion.div>
  );
};

export default displayedInfo;
