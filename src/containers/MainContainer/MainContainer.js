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
        <Route
          path="/charts/bar/"
          exact
          render={(props) => <DisplayedCharts {...props} chartId={"bar"} />}
        />
        <Route
          path="/charts/radar/"
          exact
          render={(props) => <DisplayedCharts {...props} chartId={"radar"} />}
        />
        <Route
          path="/charts/polar/"
          exact
          render={(props) => <DisplayedCharts {...props} chartId={"polar"} />}
        />
        <Route
          path="/charts/pie/"
          exact
          render={(props) => <DisplayedCharts {...props} chartId={"pie"} />}
        />
      </Switch>
    </motion.div>
  );
};

export default mainContainer;
