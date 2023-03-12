import React, { useState } from 'react'
import '../Comp_css/Year.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Year(props) {
    const location = useLocation();
    const navigate = useNavigate();
    var year = '';
    const handleClick = event => {
        year = event.currentTarget.value;
        console.log(year);
        navigate("/ad2", { state: { year: year, dp_name: location.state.dp_name, s_name: location.state.s_name, un_name: location.state.un_name, sem: location.state.sem } })
    };
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
                <button id='but_year' onClick={handleClick} value='2022-23'>2022-2023</button>
            </div>
            <div className="older">
                <button id='but_old' onClick={() => setShow(!show)}>Show Older Results</button>
            </div>

            {
                show ? <div className='bottom'><button id="but_year1" value='2021-22' onClick={handleClick}>2021-2022</button>
                    <button id='but_year1' value='2020-21' onClick={handleClick}>2020-2021</button>
                    <button id='but_year1' value='2019-20' onClick={handleClick}>2019-2020</button>
                    <button id='but_year1' value='2018-19' onClick={handleClick}>2018-2019</button></div > : null

            }
        </div >
    )
}
