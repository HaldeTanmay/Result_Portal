import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import Semester from './Semester';
import './semester.css'
// import "../Comp_css/Univer.css"

export default function UnLabel(props) {
    const location = useLocation();
    return (
        <div className="sem_container">
            <motion.div 
              animate={{ y: [-30,0],opacity:[0.6,1] }}
              transition={{ type: "spring", duration: 3 }}
              className='semester_label'
            >
                {location.state.un_name}
            </motion.div>
            <Semester un_name={location.state.un_name} s_name={location.state.s_name} dp_name={location.state.dp_name} />
        </div>

    )
}
