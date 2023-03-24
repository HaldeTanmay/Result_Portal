import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import './Styles.css'
import University from './University';
import ReactGA from "react-ga4";
export default function Label(props) {
    const location = useLocation();
    // ReactGA.send({ hitType: "pageview", page: "/label", title: "University_Page" });
    return (
        <div className="label_container" >
            <motion.div
                animate={{ y: [-30, 0], opacity: [0.6, 1] }}
                transition={{ type: "spring", duration: 3 }}
                className="university_label"
            >
                {location.state.title}
            </motion.div>
            <University title={location.state.title} />
        </div>

    )
}