import React, { useState, useEffect } from "react";
import '../Comp_css/Result.css'
import { ImArrowRight } from 'react-icons/im';

export default function ResultWindow(props) {
    let b = 'Pass';
    const a = props.result;
    if (a == "Pass") {
        let c = '#00df00'
        b = `${c}`
    }
    else if (a == "Fail") {
        b = 'red'
    }

    let sty = {
        color: b,
        fontSize: "1.3rem",
        textShadow: "0px 1px 1px #004e00"
    }

    return (
        <div className='main'>
            <div className="r_data">
                <div className="rows">
                    <div className="col1">
                        <div>{props.sub1_name}</div>
                        <div>{props.sub2_name}</div>
                        <div>{props.sub3_name}</div>
                        <div>{props.sub4_name}</div>
                        <div>{props.sub5_name}</div>
                        <div>{props.sub6_name}</div>
                    </div>
                    <div className="col2">
                        <div>{props.sub1_marks}</div>
                        <div>{props.sub2_marks}</div>
                        <div>{props.sub3_marks}</div>
                        <div>{props.sub4_marks}</div>
                        <div>{props.sub5_marks}</div>
                        <div>{props.sub6_marks}</div>
                    </div>
                </div>
                <div className='spacing'><div>Total: </div>
                    <div className='tot'>{props.total}</div></div>

                <hr id='line_h' />
                <div className='res_end'>  <b> Result</b>
                    <div><ImArrowRight className='arrow' /></div>
                    <div style={sty}><b>{props.result}</b></div>
                </div>
            </div>


        </div>

    )
}
