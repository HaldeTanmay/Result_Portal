import React from "react";
import ResultWindow from "./ResultWindow";
import Pdf from "react-to-pdf";
import { ThreeCircles } from "react-loader-spinner";
import smapleQr from "../Images/smapleQr.jpg";
import "../Comp_css/Result.css";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import WarningIcon from "@material-ui/icons/Warning";

// import Card from './Card';
// import { useCallback } from "react";
// const axios = require('axios');

class ShowResult extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    // var un_name = props.un_name;
    // var s_name = props.s_name;
    this.state = {
      items: [],
      DataisLoaded: false,
      s_name: props.s_name,
      un_name: props.un_name,
      dp_name: props.dp_name,
      sem: props.sem,
      exam_name: props.exam_name,
      year: props.year,
      name: props.name,
      roll: props.roll,
    };
  }

  componentDidMount() {
    const { s_name, un_name, dp_name, exam_name, sem, name, roll, year, ssn } =
      this.state;
    // var s_name = { props.title };
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch(
      `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${exam_name}/${year}/${sem}/${name}/${roll}`,
      { params: { s_name, un_name, dp_name, exam_name, year, sem, name, roll } }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render(props) {
    const ref = React.createRef();

    const {
      DataisLoaded,
      items,
      s_name,
      un_name,
      dp_name,
      exam_name,
      sem,
      name,
      roll,
      year,
    } = this.state;

    if (!DataisLoaded)
      return (
        <div className="spinner">
          <ThreeCircles
            height="100"
            width="100"
            radius={1}
            color="#0066ff"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />{" "}
        </div>
        // <div>
        //   <h1> wait some time.... </h1>{" "}
        // </div>
      );

    return (
      <div className="showresult_main">
        <div className="showresult_card">
          <div className="univ_rrr" ref={ref}>
            <div className="uni_rrr">
              <div className="r_labelll">
                <div className="result_page_uni_logo_container">
                  <div className="result_header">
                    <h1>
                      {un_name}, {s_name}
                    </h1>
                    <h3>{exam_name} Grade Sheet</h3>
                    <h4>{dp_name}</h4>
                  </div>
                  <div className="result_page_uni_logo">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/c/cf/Dibrugarh_University_logo.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="table_container_cred">
                  <div className="table_container_cred_one">
                    <table
                      className="result_table_hundred result_cell_spacing_one"
                      cellSpacing="0"
                      height="130"
                    >
                      <tr>
                        <th>Name :</th>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <th>Roll Number : </th>
                        <td>{roll}</td>
                      </tr>
                      <tr>
                        <th>Institution : </th>
                        <td>{un_name}</td>
                      </tr>
                      <tr>
                        <th>semester : </th>
                        <td>{sem}</td>
                      </tr>
                    </table>
                  </div>
                  <div className="table_container_cred_two">
                    <table
                      className="result_table_hundred result_cell_spacing_two"
                      cellSpacing="0"
                      height="60"
                    >
                      <tr>
                        <th>year : </th>
                        <td>{year}</td>
                      </tr>
                      <tr>
                        <th>place : </th>
                        <td>{s_name}, India</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              {items.map((item) => (
                <ResultWindow
                  key={1}
                  sub1_name={item.sub1_name}
                  sub2_name={item.sub2_name}
                  sub3_name={item.sub3_name}
                  sub4_name={item.sub4_name}
                  sub5_name={item.sub5_name}
                  sub6_name={item.sub6_name}
                  sub1_marks={item.sub1_marks}
                  sub2_marks={item.sub2_marks}
                  sub3_marks={item.sub3_marks}
                  sub4_marks={item.sub4_marks}
                  sub5_marks={item.sub5_marks}
                  sub6_marks={item.sub6_marks}
                  total={item.Total}
                  result={item.result}
                />
              ))}
            </div>
            <br />
            <div className="result_page_qr_code">
              <img src={smapleQr} alt="" />
            </div>
            <br />
            <div className="resultpage_disclaimer_container">
              <div className="resultpage_disclaimer_heading">
                  <WarningIcon />&nbsp;Disclaimer:&nbsp;
              </div>
              <div className="resultpage_disclaimer">
              <p>
                  bdfgb ddr gfhfghfthth thtr fsfs rfgrd asfsfa fsfaf efes fsegb
                  ddr gfhfghfthth thtr fsfs rfgrd asfsfa fsfaf efes fsef efes
                </p>
              {/* <marquee>
                  bdfgb ddr gfhfghfthth thtr fsfs rfgrd asfsfa fsfaf efes fsegb
                  ddr gfhfghfthth thtr fsfs rfgrd asfsfa fsfaf efes fsef efes
                  fsegb ddr gfhfghfthth thtr fsfs rfgrd asfsfa fsfaf efes fse
                </marquee> */}
              </div>
            </div>
          </div>
          {/* <button className='print_button' onClick={this.generateSimplePDF}>Print</button> */}
          <Pdf targetRef={ref} filename="Result.pdf" y={4} x={18} scale={0.8}>
            {({ toPdf }) => (
              <div className="print_button_container">
                <button className="print_button" onClick={toPdf}>
                  <LocalPrintshopIcon />
                  &nbsp;Print
                </button>
                <button className="print_button_small" onClick={toPdf}>
                  <LocalPrintshopIcon />
                </button>
              </div>
            )}
          </Pdf>
        </div>
      </div>
    );
  }
}

export default ShowResult;
