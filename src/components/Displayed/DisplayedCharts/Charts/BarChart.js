import React from "react";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

import MetaTagsContainer from "../../../../containers/MetaTagsContainer/MetaTagsContainer";
import metaData from "../../../../assets/metaData/metaData";
import barImg from "../../../../assets/img/imgBar.PNG";

const barChart = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MetaTagsContainer
        title={metaData.barTitle}
        description={metaData.barDescription}
        imgURL={barImg}
      />

      <Bar data={props.data} options={props.options} />
    </motion.div>
  );
};

export default barChart;
