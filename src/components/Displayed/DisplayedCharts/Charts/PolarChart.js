import React from "react";
import { Polar } from "react-chartjs-2";
import { motion } from "framer-motion";

import MetaTagsContainer from "../../../../containers/MetaTagsContainer/MetaTagsContainer";
import metaData from "../../../../assets/metaData/metaData";
import polarImg from "../../../../assets/img/imgPolar.PNG";

const polarChart = (props) => {
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
        title={metaData.polarTitle}
        description={metaData.polarDescription}
        imgURL={polarImg}
      />

      <Polar data={props.data} options={props.options} />
    </motion.div>
  );
};

export default polarChart;
