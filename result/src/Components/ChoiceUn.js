import React from 'react'
import '../Comp_css/Card.css'
import { useNavigate } from 'react-router-dom';
export default function ChoiceUn(props) {
    var title = "";
    const navigate = useNavigate();
    const handleClick = event => {
        console.log(props.s_name);
        title = event.currentTarget.id;
        console.log(title);
        navigate("/label2", { state: { un_name: title, s_name: props.s_name } })
        // console.log(event.currentTarget.id);
    };
    // const handleClick = event => {
    //     console.log(event.target.id);
    //     var a = event.target.id;

    // }
    return (
        <div>
            <button className='btn1' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}
