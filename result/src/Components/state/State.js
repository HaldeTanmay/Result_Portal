import React from 'react'
import { motion } from 'framer-motion'

import Card from "./Card";
import Data from "../Data";
import Enquiry from '../Footer';
import '../Common.css'
import State_name from "./State_name";
import ReactGA from "react-ga4";

export default function State() {
    // ReactGA.send({ hitType: "pageview", page: "/state", title: "State_Page" });
    const dataComp = Data.map((data) => {
        return (
            < Card
                key={data.key}
                title={data.title}
            />
        )
    })
    return (
        <div className='state_container' >
            <State_name />
            <Enquiry />
        </div>
    );
}