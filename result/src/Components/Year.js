import React, { useState, useEffect } from "react";
import "../Comp_css/Year.css";
import { json, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Comp_css/Ad.css";
import GoogleAd from "./GoogleAd";
import Enquiry from '../Components/Footer';
import ReactGA from "react-ga4";
let i = 0;
export default function Year(props) {
  const location = useLocation();
  const [s_name, un_name, dp_name, sem] = [
    location.state.s_name,
    location.state.un_name,
    location.state.dp_name,
    location.state.sem,
  ];

  const [oldResult, setOldResult] = useState([]);
  const [newResult, setNewResult] = useState([]);

  const navigate = useNavigate();
  var year = "";
  const [ad, setAd] = useState("");
  useEffect(() => {
    const b = async () => {
      await fetch(
        `http://localhost:4000/ad/2`
      ).then((res) => res.json())
        .then((json) => {
          setAd(json[0] == "On" ? 'On' : 'Off');
        });

    }
    b();
  });
  var st;
  if (!ad) st = "cr";

  if (ad == "On") {
    st = "ad2"
  } else if (ad == "Off") {
    st = "cr"
  }
  const handleClick = (year, exam_name) => {
    // console.log(year, exam_name);
    // console.log("dfals");
    ReactGA.event({
      action: "Button clicked",
      category: "Year_page",
      label: "Year Selected",
      value: "xxxxx",
    })
    if (st == "cr") {
      ReactGA.send({ hitType: "pageview", page: "/cr", title: "Credentials_Page" });
    } else if (st == "ad2") {
      ReactGA.send({ hitType: "pageview", page: "/ad2", title: "Ad2" });
    }
    navigate(`/${st}`, {
      state: {
        year: year,
        dp_name: location.state.dp_name,
        s_name: location.state.s_name,
        un_name: location.state.un_name,
        sem: location.state.sem,
        exam_name: exam_name,
      },
    });
  };

  // Formate the data
  const formatDate = (date) => {
    // year/date/month
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let _date = date;
    _date = new Date(_date);
    _date = _date.toDateString().split(" ");
    _date = `${_date[3]}/${months.indexOf(_date[1]) + 1}/${_date[2]}`;
    return _date;
  };

  // count the difference btw two dates
  const countDiff = (date) => {
    let today = new Date();
    date = new Date(date);

    // calculate the difference in milliseconds
    const diffInMs = today - date;

    // convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  // Remove the dupicates entries from the array
  const removeDuplicates = (arr) => {
    let map = new Map();
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (map[`${arr[i]}`] == undefined) {
        ans.push(arr[i]);
        map[`${arr[i]}`] = 1;
      }
    }
    return ans;
  };

  useEffect(() => {
    fetch(`http://localhost:4000/sr/${s_name}/${un_name}/${dp_name}/${sem}`, {
      params: { s_name, un_name, dp_name, sem },
    })
      .then((res) => res.json())
      .then((json) => {
        let oldDates = [];
        let newDates = [];
        let max;
        console.log(json);
        for (let a of json) {
          let _year = a["year"];
          let _sem = a["exam_name"];
          let _date = formatDate(a["date"]);
          if (newDates.length < 1) {
            max = countDiff(_date);
            newDates.push([_date, _year, _sem]);
          }
          // count the differnce btw dates
          const diffBtwDates = countDiff(_date);

          // get the latest result information
          if (diffBtwDates < max) {
            newDates[0] = [_date, _year, _sem];
            max = diffBtwDates;
          }
          // push all result information to oldDates array
          oldDates.push([_date, _year, _sem]);
        }

        // set old and new result informtion in the states
        setNewResult(newDates[0]);
        setOldResult(removeDuplicates(oldDates));
      });
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="year_main">
      <motion.div
        animate={{ y: [-30, 0], opacity: [0.6, 1] }}
        transition={{ type: "spring", duration: 3 }}
        className="heading"
      >
        <b>
          {location.state.s_name} | {location.state.un_name} |{" "}
          {location.state.dp_name} | {location.state.sem}{" "}
        </b>
        <br />
      </motion.div>
      <motion.div
        animate={{ y: [30, 0], opacity: [0.6, 1] }}
        transition={{ type: "spring", duration: 3 }}
        className="year_card"
      >
        <section className="yearContainer">
          <div className="latestResult">
            <div className="label">
              <b>Ongoing Result</b>
            </div>
            <div className="resultBtn latest">
              <span style={{ display: "none" }}>{(i = 0)}</span>
              {/* {newResult.map((d) => ( */}
              <button
                id="but_year"
                className="card"
                value={newResult[1]}
                onClick={() => {
                  handleClick(newResult[1], newResult[2]);
                }}
                key={i++}
              >
                <span> {newResult[1]}</span>
                <span> {newResult[2]}</span>
                {/* <span>
            <b>Date :</b> {newResult[0]}
          </span> */}
              </button>
              {/* ))} */}
            </div>
          </div>
          <div className="olderResultInformation">
            <div className="older">
              <button id="but_old" onClick={() => setShow(!show)}>
                Older Results
              </button>
            </div>
            {show ? (
              <div
                className="resultBtn oldest"
                data-aos="slide-up"
                data-aos-duration="100"
              >
                {oldResult.map((d) =>
                  d[0] === newResult[0] &&
                    d[1] === newResult[1] &&
                    d[2] === newResult[2] ? (
                    oldResult.length <= 1 ? (
                      <div style={{ color: "grey" }}>No Result Available</div>
                    ) : null
                  ) : (
                    <button
                      className="card"
                      value={d[1]}
                      onClick={() => {
                        handleClick(d[1], d[2]);
                      }}
                      key={i++}
                    >
                      <span> {d[1]}</span>
                      <span> {d[2]}</span>
                      {/* <span>
                  <b>Date :</b> {d[0]}
                </span> */}
                    </button>
                  )
                )}
              </div>
            ) : null}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
