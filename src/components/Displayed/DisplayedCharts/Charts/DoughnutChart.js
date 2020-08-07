import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";

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
      <Doughnut data={props.data} options={props.options} />
    </motion.div>
  );
};

export default doughnutChart;