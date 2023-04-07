import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Result.css";
import ReactGA from "react-ga4";
const handleclick = () => {
  ReactGA.send({ hitType: "pageview", page: "/state", title: "State_Page" });
  ReactGA.event({
    action: "Button clicked",
    category: "Home_page",
    label: "Home Page Button",
    value: "xxxxx",
  })
}

const Result = () => {
  return (
    <motion.div
      animate={{ y: [100, 0] }}
      transition={{ type: "spring", duration: 4 }}
      whileInView={{
        opacity: [0, 1],
        transition: { duration: 2 },
      }}
      className="app_result"
    >
      <div className="app_brandName">
        <h1>Parinaam</h1>
      </div>

      <p className="app_subHeading">
        by <span className="app_rollingNotes"><a  href="https:  -//rollingnotes.in/" target="_blank">RollingNotes</a></span>
      </p>

      <div className="app_button">
        <p>Plan your Future With Us</p>
        <p>Get all your results at one place</p>
        <Link to="/state">
          <button className="app_resultBtn"
            onClick={handleclick}>Get Result</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Result;
