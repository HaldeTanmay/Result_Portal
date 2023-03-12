import React from 'react'
import { useNavigate } from 'react-router-dom';

// import '../../Comp_css/Card.css'
import './Styles.css'


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
    return (
        <div>
            <button className='university_selector' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}
