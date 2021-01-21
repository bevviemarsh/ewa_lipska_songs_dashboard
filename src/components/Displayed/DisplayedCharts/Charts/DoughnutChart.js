import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";

import MetaTagsContainer from "../../../../containers/MetaTagsContainer/MetaTagsContainer";
import metaData from "../../../../assets/metaData/metaData";
import doughnutImg from "../../../../assets/img/imgDoughnut.PNG";

const doughnutChart = (props) => {
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
        title={metaData.doughnutTitle}
        description={metaData.doughnutDescription}
        imgURL={doughnutImg}
      />

      <Doughnut data={props.data} options={props.options} />
    </motion.div>
  );
};

export default doughnutChart;
