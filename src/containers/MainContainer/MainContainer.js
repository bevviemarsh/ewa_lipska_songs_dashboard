import React from "react";
import classes from "./MainContainer.module.css";
import DisplayedInfo from "../../components/Displayed/DisplayedInfo/DisplayedInfo";
import DisplayedCharts from "../../components/Displayed/DisplayedCharts/DisplayedCharts";
import { Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";

const mainContainer = () => {
  return (
    <motion.div
      className={classes.Main}
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 1 }}
    >
      <Switch>
        <Route path="/" exact component={DisplayedInfo} />
        <Route path="/charts/bar/:bar" exact component={DisplayedCharts} />
        <Route path="/charts/radar/:radar" component={DisplayedCharts} />
        <Route path="/charts/polar/:polar" component={DisplayedCharts} />
        <Route path="/charts/pie/:pie" component={DisplayedCharts} />
      </Switch>
    </motion.div>
  );
};

export default mainContainer;
