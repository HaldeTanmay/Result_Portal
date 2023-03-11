import React from 'react'
import { useNavigate } from 'react-router-dom';

import './semester.css'

export default function ChoiceUn(props) {
    var sem = "";
    const navigate = useNavigate();
    const handleClick = event => {
        console.log(props.s_name);
        console.log(props.un_name);
        console.log(props.dp_name);
        sem = event.currentTarget.id;
        console.log(sem);
        navigate("/year", { state: { dp_name: props.dp_name, s_name: props.s_name, un_name: props.un_name, sem: sem } })
    };
    return (
        <div>
            <button className='semester_selector' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}
