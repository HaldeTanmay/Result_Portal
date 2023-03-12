import React from 'react'
import { motion } from 'framer-motion'

import Card from "./Card";
import Data from "../Data";
import '../Common.css'

export default function State() {
    const dataComp = Data.map((data) => {
        return (
            < Card
                key={data.key}
                title={data.title}
            />
        )
    })
    return (
        <div >
          
                    <motion.div 
                        animate={{ y: [-30,0],opacity:[0.6,1] }}
                        transition={{ type: "spring", duration: 3 }}
                        className='state_label'
                        // style={Styles.state_label}
                    >
                        Select Your State:
                    </motion.div>

                    <motion.div 
                        animate={{ y: [30,0],opacity:[0.6,1] }}
                        transition={{ type: "spring", duration: 3 }}
                        className="state_name_container"
                    >
                        <div className='state_scroll'>
                            {dataComp}
                        </div>
                    </motion.div> 
           
        </div>
    );
}