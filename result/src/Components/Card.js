import React from 'react'
import '../Comp_css/Card.css'
import { Link } from 'react-router-dom';
import Label from './Label';
import { useNavigate } from 'react-router-dom';
export default function Card(props) {
    var title = "goa";
    const navigate = useNavigate();
    const handleClick = event => {
        title = event.currentTarget.id;
        navigate("/ad", { state: { title: title } })
        // console.log(event.currentTarget.id);
    };
    // const handleClick = event => {
    //     console.log(event.target.id);
    //     var a = event.target.id;

    // }
    return (
        <div>
            {/* <Link to="/ad"><button className='btn1' id={props.title} onClick={<Label title={props.title}></Label>}>{props.title}</button></Link> */}
            {/* <button className='btn1' id={props.title} onClick={handleClick}>{props.title}</button> */}
            <button className='btn1' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}
