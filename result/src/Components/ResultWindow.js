import React, { useState, useEffect } from "react";
import "../Comp_css/Result.css";
import { ImArrowRight } from "react-icons/im";

export default function ResultWindow(props) {
  let b = "Pass";
  const a = props.result;
  if (a == "Pass") {
    let c = "#00df00";
    b = `${c}`;
  } else if (a == "Fail") {
    b = "red";
  }

  let sty = {
    color: b,
    fontSize: "1.6rem",
    textShadow: "0px 1px 1px #004e00",
  };

  return (
    <div>
      <table
        className="result_table_header"
        border="1"
        cellSpacing="0"
        height="auto"
      >
        <tr className="table_heading">
          <th>S.No.</th>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td style={{width : "5%"}}>1.</td>
          <th>{props.sub1_name} </th>
          <td>{props.sub1_marks}</td>
        </tr>
        <tr>
          <td style={{width : "5%"}}>2.</td>
          <th>{props.sub2_name}</th>
          <td>{props.sub2_marks}</td>
        </tr>
        <tr>
          <td style={{width : "5%"}}>3.</td>
          <th>{props.sub3_name}</th>
          <td>{props.sub3_marks}</td>
        </tr>
        <tr>
          <td style={{width : "5%"}}>4.</td>
          <th>{props.sub4_name}</th>
          <td>{props.sub4_marks}</td>
        </tr>
        <tr>
          <td style={{width : "5%"}}>5.</td>
          <th>{props.sub5_name}</th>
          <td>{props.sub5_marks}</td>
        </tr>
        <tr>
          <td style={{width : "5%"}}>6.</td>
          <th>{props.sub6_name}</th>
          <td>{props.sub6_marks}</td>
        </tr>
        <tr>
      <td style={{width : "5%"}}> </td>
          <th>Total</th>
          <th>{props.total}</th>
        </tr>
      </table>
      <div className="result_res_end">
        <h2> Result : <span style={sty}>{props.result} </span></h2>
        <h2> CGPA : <span className="result_cgpa ">8.43</span></h2>
      </div>
    </div>
  );
}
