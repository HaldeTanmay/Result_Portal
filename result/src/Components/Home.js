import React from 'react'
import '../Comp_css/Home.css';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
export default function Home() {
    return (
        <div className='main'>

            {/* <Navbar /> */}
            <div className="imm">
                <img id="imm" src="https://media.istockphoto.com/id/1313256118/photo/graduate-concept-cropped-image-of-row-of-students-in-black-robes-with-diplomas-in-hands-at.jpg?b=1&s=170667a&w=0&k=20&c=d4KU8TMsQX5zPWy1vSWuWez9v0OiLNJIxOU3CCVCk4Y=" alt="" />
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">parinaam</h1>
                    <p className="lead">All India universities results are available here</p>
                </div>
            </div>
            <div className="btn..">
                <Link to='/state'><button className="btn">Check Result</button></Link>
            </div>
        </div>

    );
}
