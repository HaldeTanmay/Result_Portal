import React from 'react'
import { useLocation } from 'react-router-dom'
import "../Comp_css/Univer.css"
import University from './University';

export default function Label(props) {
    const location = useLocation();
    return (
        <div className="main">
            <div id='s_label'>{location.state.title}</div>
            <University title={location.state.title} />
        </div>

    )
}
