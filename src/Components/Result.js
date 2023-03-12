import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import ShowResult from "./ShowResult";

export default function Result() {
  const location = useLocation();
  return (
    <div className="result_main_background">
      <div className="result_main">
        {/* <div className="result_label_main">
          <h1>Result</h1>
        </div> */}
        <motion.div
          animate={{ y: [-30, 0], opacity: [0.6, 1] }}
          transition={{ type: "spring", duration: 3 }}
          className="result_label_main"
        >
          <h1 className="result_label_main_heading">Result</h1>
        </motion.div>
        <ShowResult
          un_name={location.state.un_name}
          s_name={location.state.s_name}
          dp_name={location.state.dp_name}
          sem={location.state.sem}
          year={location.state.year}
          exam_name={location.state.exam_name}
          name={location.state.name}
          roll={location.state.roll}
        />
      </div>
    </div>
  );
}
