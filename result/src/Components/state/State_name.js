import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Card.css'
import Card from "./Card";
import Data from "../Data";
import '../Common.css'
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga4";
// const handleclick = () => {
//     ReactGA.event({
//       action: "State_page",
//       category: "State_page",
//       label: "State_page",
//       value: "xxxxx",
//     })
//   }

export default function State() {
    var title = "goa";
    const navigate = useNavigate();
    const [ad, setAd] = useState("");
    useEffect(() => {
        const b = async () => {
            await fetch(
                `http://localhost:4000/ad/1`
            ).then((res) => res.json())
                .then((json) => {
                    setAd(json[0] == "On" ? 'On' : 'Off');
                });

        }
        b();
    });
    var st;
    if (!ad) st = "label";

    if (ad == "On") {
        st = "ad"
    } else if (ad == "Off") {
        st = "label"
    }
    const handleClick = event => {
        if (st == "ad") {
            ReactGA.send({ hitType: "pageview", page: "/ad", title: "Ad1" });
        } else if (st == "label") {
            ReactGA.send({ hitType: "pageview", page: "/label", title: "University_Page" });
        }
        title = event.currentTarget.id;
        ReactGA.event({
            action: "Button clicked",
            category: "State_page",
            label: "State_Selected:",
            value: title,
        })


        navigate(`/${st}`, { state: { title: title } })
        // console.log(event.currentTarget.id);
    };
    const dataComp = Data.map((data) => {
        return (
            <div><button className='state_selector' id={data.title} onClick={handleClick}>{data.title}</button></div>

            // < Card
            //     key={data.key}
            //     title={data.title}
            // />
        )
    })
    return (
        <div >

            <motion.div
                animate={{ y: [-30, 0], opacity: [0.6, 1] }}
                transition={{ type: "spring", duration: 3 }}
                className='state_label'
            // style={Styles.state_label}
            >
                Select Your State:
            </motion.div>

            <motion.div
                animate={{ y: [30, 0], opacity: [0.6, 1] }}
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