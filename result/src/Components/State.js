import React from 'react'
import Card from "./Card";
import Data from "./Data";
import '../Comp_css/Card.css'
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
        <div className="main">
            <b id='label'>Select Your State:</b>
            <div className="container1">
                <div className="state">
                    {dataComp}
                </div>
            </div>

        </div>
    );
}

