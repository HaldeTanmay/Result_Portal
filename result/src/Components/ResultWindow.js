import React from 'react'
import '../Comp_css/Result.css'
export default function ResultWindow(props) {
    return (
        <div className='main'>
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
            <div>Total: {props.total}</div>

        </div>

    )
}
