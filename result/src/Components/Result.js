import React from 'react'
import { useLocation } from 'react-router-dom'
import ShowResult from './ShowResult';
export default function Result() {
    const location = useLocation();
    return (
        <div className='main'>
            <div className="label">Result</div>
            <ShowResult un_name={location.state.un_name} s_name={location.state.s_name} dp_name={location.state.dp_name} sem={location.state.sem} year={location.state.year} exam_name={location.state.exam_name} name={location.state.name} roll={location.state.roll} />
        </div>
    )
}
