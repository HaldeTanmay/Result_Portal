import React from 'react'
import {
    useParams
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";
import ShowResult from "./ShowResult";
export default function QrResult() {
    let { name, roll, s_name, un_name, dp_name, sem, year, exam_name } = useParams();
    ReactGA.send({ hitType: "pageview", page: "/result", title: "Result_Page" });
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
                    un_name={un_name}
                    s_name={s_name}
                    dp_name={dp_name}
                    sem={sem}
                    year={year}
                    exam_name={exam_name}
                    name={name}
                    roll={roll}
                />
            </div>
        </div>
    );
}