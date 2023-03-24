import React, { useEffect, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
import { Label } from '../University';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Card(props) {
    const [ad, setAd] = useState("");
    // const b = async () => {
    //     console.log('API')
    //     await fetch(
    //         `http://localhost:4000/ad/1`
    //     ).then((res) => res.json())
    //         .then((json) => {
    //             setAd(json[0] == 'On' ? 'On' : 'Off');
    //         });

    // }

    const b = () => {
        axios.get('http://localhost:4000/ad/1').then((response) => {
            // setPost(response.data);
            console.log(response);
        });
    }
    useEffect(() => {
        b();
        console.log(props.title)
    }, [props.title]);
    var st;
    if (!ad) st = "label";

    if (ad == "On") {
        st = "ad"
    } else if (ad == "Off") {
        st = "label"
    }
    // useEffect(() => {
    // fetch(
    //     `http://localhost:4000/ad/1`
    // )
    //     .then((res) => res.json())
    //     .then((json) => {
    //         setAd(json.map((item) => (item)));
    //     });

    // }, []);

    var title = "goa";
    const navigate = useNavigate();
    const handleClick = event => {
        title = event.currentTarget.id;

        navigate(`/${st}`, { state: { title: title } })
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
            <button className='state_selector' id={props.title} onClick={handleClick}>{props.title}</button>
        </div>

    )
}