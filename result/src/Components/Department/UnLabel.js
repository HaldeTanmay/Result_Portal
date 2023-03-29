import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactGA from "react-ga4";
import Department from './Department';
import './Department.css'
import Enquiry from '../Footer';

export default function UnLabel(props) {
    const location = useLocation();
    ReactGA.send({ hitType: "pageview", page: "/label2", title: "Department_Page" });
    return (
        <div className="Depatment_container">
            <motion.div className='Depatment_label'
                animate={{ y: [-30, 0], opacity: [0.6, 1] }}
                transition={{ type: "spring", duration: 3 }}
            >
                {location.state.un_name}
            </motion.div>
            <Department un_name={location.state.un_name} s_name={location.state.s_name} />
            <Enquiry />
        </div>

    )
}
