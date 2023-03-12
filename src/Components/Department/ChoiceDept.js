import React from 'react'
import { useNavigate } from 'react-router-dom';
// import '../Comp_css/Card.css'
import './Department.css'

export default function ChoiceUn(props) {
    var dp_name = "";
    const navigate = useNavigate();
    const handleClick = event => {
        console.log(props.s_name);
        console.log(props.un_name);
        dp_name = event.currentTarget.id;
        console.log(dp_name);
        navigate("/label3", { state: { dp_name: dp_name, s_name: props.s_name, un_name: props.un_name } })
        // console.log(event.currentTarget.id);
    };
    // const handleClick = event => {
    //     console.log(event.target.id);
    //     var a = event.target.id;

    // }
    return (
        <div>
            <button className='Deparment_selector' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}
