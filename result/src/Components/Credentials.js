import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import ReactGA from "react-ga4";

import "../Comp_css/Credential.css";
// import ChoiceSem from "./Semester/ChoiceSem";
// import { Input, Card } from "antd";
// import "antd/dist/antd";
// import TextField from "@mui/material/TextField";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel } from "@material-ui/core";

export default function Credentials(props) {
  const [ad, setAd] = useState("");
  useEffect(() => {
    const b = async () => {
      await fetch(
        `http://localhost:4000/ad/3`
      ).then((res) => res.json())
        .then((json) => {
          setAd(json[0] == "On" ? 'On' : 'Off');
        });

    }
    b();
  });
  var st;
  if (!ad) st = "result";

  if (ad == "On") {
    st = "ad3"
  } else if (ad == "Off") {
    st = "result"
  }
  const location = useLocation();
  const navigate = useNavigate();
  const s_name = location.state.s_name;
  const dp_name = location.state.dp_name;
  const un_name = location.state.un_name;
  const sem = location.state.sem;
  const year = location.state.year;
  const exam_name = location.state.exam_name;
  console.log(exam_name);
  const [name, setName] = useState("");
  const [nameMatch, setNameMatch] = useState([]);
  // const [exam_name, setExam_name] = useState("");
  const [mothers_name, setMothers_name] = useState("");
  const [roll, setRoll] = useState("");
  const checkResult = async (e) => {
    e.preventDefault();
    const a = "sem";
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
    console.log(
      s_name,
      dp_name,
      un_name,
      sem,
      year,
      exam_name,
      name,
      roll,
      mothers_name
    );

    if (res.status === 400 || !data) {
      window.alert("Invalid  Credentials");
      console.log("Invalid  Credentials");
      ReactGA.event({
        action: "Button clicked",
        category: "Credential_page",
        label: "Entered invalid credentials",
        value: "xxxxx",
      })
    } else if (res.status === 999) {
      if (st == "result") {
        ReactGA.send({ hitType: "pageview", page: "/result", title: "Result_Page" });
      } else if (st == "ad3") {
        ReactGA.send({ hitType: "pageview", page: "/ad3", title: "Ad3" });
      }
      ReactGA.event({
        action: "Button clicked",
        category: "Credential_page",
        label: "Entered right credentials",
        value: "xxxxx",
      })
      navigate(`/${st}`, {
        state: {
          year: location.state.year,
          dp_name: location.state.dp_name,
          s_name: location.state.s_name,
          un_name: location.state.un_name,
          sem: location.state.sem,
          roll: roll,
          name: name,
          exam_name: location.state.exam_name,
        },
      });
    }
  };
  let jsondata = "";
  function HandleChange(e) {
    setName("");
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
  // function HandleChangeOp(e) {
  //   setExam_name(e.target.value);
  // }
  const [items, setItems] = useState([]);
  const [names, setNames] = useState([]);

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
        setNames(
          json.map((item) => ({ label: item.name, rll: Math.floor(item.roll) }))
        );
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

  let nameData = "";
  const onSuggestHandler = (text, roll) => {
    setName(text);
    setRoll(roll);
    var name = text;
    console.log(name);
    // fetch(
    //   `http://localhost:4000/cr/${s_name}/${un_name}/${dp_name}/${exam_name}/${year}/${sem}/${name}/dept/hel`,
    //   { params: { s_name, un_name, dp_name, exam_name, year, sem, name } }
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     nameData = json;
    //     console.log(nameData[0]);
    //     var intvalue = Math.floor(nameData[0]);
    //     setRoll(intvalue);
    //   });
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
          <form className="form_container">
            <img src="https://cdn.vectorstock.com/i/preview-1x/50/20/study-share-logo-icon-design-vector-22925020.webp" />
            <div className="title_container">
              <h2 className="title">Result Portal</h2>
            </div>

            <div className="textfield_container">
              <div className="textfield_indi_container">
                <TextField
                  className="textfeild_mui"
                  type="text"
                  id="year"
                  label="Year"
                  variant="standard"
                  autoComplete="off"
                  value={location.state.year}
                  readOnly={true}
                  required
                />
              </div>
              <div className="textfield_indi_container textfield_textalign_left">
                <TextField
                  className="textfeild_mui"
                  label="Select Exam Name"
                  // select
                  id="Exam Name"
                  // onChange={HandleChangeOp}
                  required
                  variant="standard"
                  value={location.state.exam_name}
                  readOnly={true}
                >
                  {/* <MenuItem value="choose" disabled selected="selected">
                    Select Exam Name
                  </MenuItem>
                  {items.map(({ label }) => (
                    <MenuItem value={label}>{label}</MenuItem>
                  ))} */}
                </TextField>
              </div>

              <div className="textfield_indi_container">
                <TextField
                  className="textfeild_mui"
                  type="text"
                  id="Roll no"
                  label="Roll Number"
                  variant="standard"
                  autoComplete="off"
                  value={roll}
                  onChange={HandleChange}
                  required
                />
              </div>

              <div className="textfield_indi_container">
                <TextField
                  className="textfeild_mui user_name_field"
                  id="Name"
                  type="text"
                  label="Name"
                  variant="standard"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => searchName(e.target.value)}
                  required
                />
                <div className="name_suggestion_column">
                  {nameMatch &&
                    nameMatch.map((item, i) => (
                      <div
                        className="name_suggestion_column_indi"
                        onClick={() => onSuggestHandler(item.label, item.rll)}
                      >
                        {item.label}-{item.rll}
                      </div>
                    ))}
                </div>
              </div>

              <div className="textfield_indi_container">
                <TextField
                  className="textfeild_mui"
                  id="mother name"
                  label="Mother Name"
                  variant="standard"
                  autoComplete="off"
                  value={mothers_name}
                  onChange={(e) => setMothers_name(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <button className="form_btn" onClick={checkResult}>
                Check Result
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
