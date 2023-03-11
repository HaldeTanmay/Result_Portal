import React from 'react'
import { motion } from 'framer-motion'

import Card from "./Card";
import Data from "../Data";
import '../Common.css'
import State_name from "./State_name";

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
        <div  className='state_container' >
                <State_name/>
        </div>
    );
}