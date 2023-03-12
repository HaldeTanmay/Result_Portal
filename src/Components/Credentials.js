import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "react-lottie";

import "../Comp_css/Credential.css";
import ChoiceSem from "./Semester/ChoiceSem";
import { Input, Card } from "antd";
import "antd/dist/antd";

export default function Credentials(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const s_name = location.state.s_name;
  const dp_name = location.state.dp_name;
  const un_name = location.state.un_name;
  const sem = location.state.sem;
  const year = location.state.year;
  const [name, setName] = useState("");
  const [nameMatch, setNameMatch] = useState([]);
  const [exam_name, setExam_name] = useState("");
  const [mothers_name, setMothers_name] = useState("");
  const [roll, setRoll] = useState("");
  const checkResult = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/cr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        s_name,
        dp_name,
        un_name,
        sem,
        year,
        exam_name,
        name,
        roll,
        mothers_name,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid  Credentials");
      console.log("Invalid  Credentials");
    } else if (res.status === 999) {
      // console.log("Result Available");
      // console.log(roll);
      // console.log(name);
      // console.log(exam_name);
      navigate("/result", {
        state: {
          year: location.state.year,
          dp_name: location.state.dp_name,
          s_name: location.state.s_name,
          un_name: location.state.un_name,
          sem: location.state.sem,
          roll: roll,
          name: name,
          exam_name: exam_name,
        },
      });
    }
  };
  let jsondata = "";
  function HandleChange(e) {
    setRoll(e.target.value);
    var roll = e.target.value;
    console.log(roll);
    fetch(
      `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${exam_name}/${year}/${sem}/${roll}`,
      { params: { s_name, un_name, dp_name, exam_name, year, sem, roll } }
    )
      .then((res) => res.json())
      .then((json) => {
        jsondata = json;
        console.log(jsondata[0]);
        setName(jsondata[0]);
      });
  }
  function HandleChangeOp(e) {
    setExam_name(e.target.value);
  }
  const [items, setItems] = useState([]);
  const [names, setNames] = useState([]);

  // useEffect(() => {
  //     fetch(`http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${year}/${sem}`, { params: { s_name, un_name, dp_name, year, sem } })
  //         .then((res) => res.json())
  //         .then((json) => {
  //             setItems(json.map((item) => ({ label: item })));
  //         })
  // }, []);

  useEffect(() => {
    fetch(
      `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${year}/${sem}`,
      { params: { s_name, un_name, dp_name, year, sem } }
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json.map((item) => ({ label: item })));
      });
  }, []);
  useEffect(() => {
    fetch(
      `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${sem}/${year}/1`,
      { params: { s_name, un_name, dp_name, sem, year } }
    )
      .then((res) => res.json())
      .then((json) => {
        setNames(json.map((item) => ({ label: item })));
      });
  }, []);
  console.log(names);
  const searchName = (text) => {
    console.log(text);
    console.log(text.length);
    if (text.length >= 3) {
      let matches = names.filter((item1, index) => {
        const regex = new RegExp(`^${text}|(?<=\\s.*(\\S+)\\s)${text}`, "gi");
        return item1.label.match(regex);
      });

      setNameMatch(matches);
      console.log(nameMatch);
      console.log(matches);
    } else {
      setNameMatch(null);
    }
    setName(text);
  };
  // const onSuggestHandler = (text) => {
  //     console.log(text);
  //     setName(text)
  //     setNameMatch([])

  // }
  let nameData = "";
  const onSuggestHandler = (text) => {
    setName(text);
    var name = text;
    console.log(name);
    fetch(
      `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${exam_name}/${year}/${sem}/${name}/dept/hel`,
      { params: { s_name, un_name, dp_name, exam_name, year, sem, name } }
    )
      .then((res) => res.json())
      .then((json) => {
        nameData = json;
        console.log(nameData[0]);
        var intvalue = Math.floor(nameData[0]);
        setRoll(intvalue);
      });
    setNameMatch([]);
  };

  return (
    <div className="form form_background_wave">
      {/* <img
        className="wave"
        src="https://meiosis-studios.github.io/Animated-Login-Form/img/wave.png"
      /> */}
      <div className="containerr">
        <div className="result_img">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_vq5wzcvx.json"
            background="transparent"
            speed={1}
            style={{ width: "400px", height: "400px" }}
            loop
            autoPlay
          />
        </div>
        <div className="form-content">
          <form>
            <img src="https://cdn.vectorstock.com/i/preview-1x/50/20/study-share-logo-icon-design-vector-22925020.webp" />
            <h2 className="title">Result Portal</h2>
            <div className="input-div one">
              <div className="result_div">
                <input
                  className="form_input"
                  type="text"
                  id="year"
                  value={location.state.year}
                  readOnly={true}
                  placeholder=" "
                  required
                />
                <label className="form_label" for="year">
                  year
                </label>
              </div>
            </div>
            <div className="input-div one">
              <div className="result_div">
                <select required class="custom-select" onChange={HandleChangeOp}>
                  <option value="choose" disabled selected="selected">
                    Select Exam Name 
                  </option>
                  {items.map(({ label }) => (
                    <option value={label}>{label}</option>
                  ))}
                </select>
              </div>{" "}
            </div>
            <div className="input-div one">
              <div className="result_div">
                <input
                  className="form_input"
                  type="text"
                  id="Name"
                  placeholder=" "
                  autoComplete="off"
                  value={name}
                  onChange={(e) => searchName(e.target.value)}
                  required
                />
                <label className="form_label" for="Name">
                  Name
                </label>
              </div>
            </div>
            <div className="name_suggestion_column">
              {nameMatch &&
                nameMatch.map((item, i) => (
                  <div
                  className="name_suggestion_column_indi"
                    onClick={() => onSuggestHandler(item.label)}
                  >
                    {item.label}
                  </div>
                ))}
            </div>
            <div className="input-div one">
              <div className="result_div">
                <input  
                  className="form_input"
                  type="text"
                  id="Roll no"
                  placeholder=" "
                  autoComplete="off"
                  value={roll}
                  onChange={HandleChange}
                  required
                />
                <label className="form_label" for="Roll no.">
                  RollNo.
                </label>
              </div>
            </div>
            <div className="input-div one">
              <div className="result_div">
                <input
                  className="form_input"
                  type="text"
                  id="mother name"
                  placeholder=" "
                  autoComplete="off"
                  value={mothers_name}
                  onChange={(e) => setMothers_name(e.target.value)}
                  required
                />
                <label className="form_label" for=" mother name">
                  MotherName
                </label>
              </div>
            </div>
            <div>
              <button className="form_btn" onClick={checkResult}>Check Result</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
