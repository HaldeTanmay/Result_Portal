import React from 'react'
import { useLocation } from 'react-router-dom'
import "../Comp_css/Univer.css"
import Department from './Department';

export default function UnLabel(props) {
    const location = useLocation();
    return (
        <div className="main">
            <div id='s_label'>{location.state.un_name}</div>
            <Department un_name={location.state.un_name} s_name={location.state.s_name} />
        </div>

    )
}
