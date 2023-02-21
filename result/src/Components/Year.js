import React, { useState } from 'react'
import '../Comp_css/Year.css'
import { useLocation } from 'react-router-dom'

export default function Year(prop) {
    const location = useLocation();
    const [show, setShow] = useState(false);
    return (
        <div className='main'>
            <div className='heading'>
                <b>{location.state.s_name} | {location.state.un_name} | {location.state.dp_name} | {location.state.sem} </b>
            </div>
            <div className='label'>
                <b>Ongoing Result</b>
            </div>
            <div className="latest">
                <button id='but_year'>2022-2023</button>
            </div>
            <div className="older">
                <button id='but_old' onClick={() => setShow(!show)}>Show Older Results</button>
            </div>

            {
                show ? <div className='bottom'><button id="but_year1">2021-2022</button>
                    <button id='but_year1'>2020-2021</button>
                    <button id='but_year1'>2019-2020</button>
                    <button id='but_year1'>2019-2020</button></div > : null

            }
        </div >
    )
}
