import React, { Component } from "react";
import classes from "./ChartsNavigation.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class ChartsNavigation extends Component {
  state = {
    navigationItems: [
      { title: "Home", pathName: "/" },
      { title: "Bar", pathName: "/charts/bar/:bar" },
      { title: "Radar", pathName: "/charts/radar/:radar" },
      { title: "Polar", pathName: "/charts/polar/:polar" },
      { title: "Pie", pathName: "/charts/pie/:pie" },
    ],
  };

  render() {
    const variants = {
      hoverPosition: { y: -2 },
      tapPosition: { y: 3 },
    };

    return (
      <div className={classes.Navigation}>
        <nav>
          <motion.ul>
            {this.state.navigationItems.map((item, id) => (
              <motion.li
                key={id}
                variants={variants}
                whileHover={"hoverPosition"}
                whileTap={"tapPosition"}
              >
                <Link to={item.pathName} exact>
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    );
  }
}

export default ChartsNavigation;
