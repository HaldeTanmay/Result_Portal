import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import Switch from "@mui/material/Switch";
import { motion } from 'framer-motion'


import Navbar from "../HomePage/Hamburger/NavigationMenu";
import "./AdStatus.css";

function AdStatus() {
  // const [ad, setAd] = useState("");
  const [ad1, setAd1] = useState(true);
  const [ad2, setAd2] = useState(true);
  const [ad3, setAd3] = useState(true);
  useEffect(() => {
    const b = async () => {
      await fetch(`http://localhost:4000/ad/1`)
        .then((res) => res.json())
        .then((json) => {
          // setAd(json.map((item) => (
          //     item == "On" ? true : false

          // )));
          setAd1(
            // json.map((item) => (
            json[0] == "On" ? true : false

            // )
          );
          // json.map((item) => (
          console.log(json[0]);
          // ))
        });
    };
    b();
  }, []);
  useEffect(() => {
    const b = async () => {
      await fetch(`http://localhost:4000/ad/2`)
        .then((res) => res.json())
        .then((json) => {
          // setAd(json.map((item) => (
          //     item == "On" ? true : false

          // )));
          setAd2(
            // json.map((item) => (
            json[0] == "On" ? true : false

            // )
          );
          // json.map((item) => (
          console.log(json[0]);
          // ))
        });
    };
    b();
  }, []);
  useEffect(() => {
    const b = async () => {
      await fetch(`http://localhost:4000/ad/3`)
        .then((res) => res.json())
        .then((json) => {
          // setAd(json.map((item) => (
          //     item == "On" ? true : false

          // )));
          setAd3(
            // json.map((item) => (
            json[0] == "On" ? true : false

            // )
          );
          // json.map((item) => (
          console.log(json[0]);
          // ))
        });
    };
    b();
  }, []);

  // console.log(ad);

  const handleChange1 = async (f) => {
    var st;
    setAd1(!ad1);
    if (ad1 == true) {
      st = "Off";
    } else if (ad1 == false) {
      st = "On";
    }
    console.log(st);
    const res = await fetch("http://localhost:4000/adStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Ad: f,
        Status: st,
      }),
    });
  };
  const handleChange2 = async (f) => {
    var st;
    setAd2(!ad2);
    if (ad2 == true) {
      st = "Off";
    } else if (ad2 == false) {
      st = "On";
    }
    console.log(st);
    const res = await fetch("http://localhost:4000/adStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Ad: f,
        Status: st,
      }),
    });
  };
  const handleChange3 = async (f) => {
    var st;
    setAd3(!ad3);
    if (ad3 == true) {
      st = "Off";
    } else if (ad3 == false) {
      st = "On";
    }
    console.log(st);
    const res = await fetch("http://localhost:4000/adStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Ad: f,
        Status: st,
      }),
    });
  };
  return (
    <>
      <Navbar />

      <div className="status_container_main" style={{ textAlign: "center" }}>
        <div className="ad_control_label">AD Control</div>
        <motion.div 
           animate={{ y: [30, 0], opacity: [0.6, 1] }}
           transition={{ type: "spring", duration: 3 }}
           className="status_container"
           >
          <h2 style={{ color: "#053885" }}>Turn ON/OFF the advertisement</h2>
          <br />
          <div>
            <div className="status_indi">
              <h3>Advertisement 1 (after State Selection) &nbsp;&nbsp;</h3>
              {/* <ReactSwitch checked={ad1} onChange={() => handleChange1(1)} /> */}
              <td>
                <Switch
                  className="switch"
                  checked={ad1}
                  onChange={() => handleChange1(1)}
                  defaultChecked
                />
              </td>
            </div>

            <div className="status_indi">
              <h3>Advertisement 2 (after Ongoing Results)</h3>
              {/* <ReactSwitch checked={ad2} onChange={() => handleChange2(2)} /> */}
              <Switch
                checked={ad2}
                onChange={() => handleChange2(2)}
                defaultChecked
              />
            </div>

            <div className="status_indi">
              <h3>Advertisement 3 (after Credentials) &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              {/* <ReactSwitch checked={ad3} onChange={() => handleChange3(3)} /> */}
              <Switch
                checked={ad3}
                onChange={() => handleChange3(3)}
                defaultChecked
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AdStatus;
