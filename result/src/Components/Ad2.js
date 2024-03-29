import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import { Adsense } from '@ctrl/react-adsense';
import "../Comp_css/Ad.css";
import ReactGA from "react-ga4";
function Ad2(props) {
  const [counter, setCounter] = React.useState(5);
  const [displayBtn, setDisplayBtn] = useState(false);
  const [fourceCounter, setFourceCounter] = useState(15);

  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(location.state.year);
    navigate("/cr", {
      state: {
        year: location.state.year,
        dp_name: location.state.dp_name,
        s_name: location.state.s_name,
        un_name: location.state.un_name,
        sem: location.state.sem,
        exam_name: location.state.exam_name,
      },
    });
    // console.log(event.currentTarget.id);
  };
  const handleClick1 = () => {
    ReactGA.event({
      action: "Button clicked",
      category: "Ad2_skip",
      label: "Ad2_skip",
      value: "xxxxx",
    })
    console.log(location.state.year);
    navigate("/cr", {
      state: {
        year: location.state.year,
        dp_name: location.state.dp_name,
        s_name: location.state.s_name,
        un_name: location.state.un_name,
        sem: location.state.sem,
        exam_name: location.state.exam_name,
      },
    });
    // console.log(event.currentTarget.id);
  };

  // after 5s it set the state true and user will see the skip button
  const watiForSecond = () => {
    setTimeout(() => {
      setDisplayBtn(true);
    }, 5000);
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  //   After 10second the page will automatically routes to the next page
  useEffect(() => {
    const timer =
      fourceCounter > 0 &&
      setInterval(() => setFourceCounter(fourceCounter - 1), 1000);
    if (fourceCounter === 0) {
      handleClick();
    }
    return () => clearInterval(timer);
  }, [fourceCounter]);

  //   After 5s second user will give btn to skip add
  useEffect(() => {
    watiForSecond();
  }, []);

  return (
    <div className="Ad_conatiner">
      <motion.div
        // animate={{ y: [30, 0], opacity: [0.6, 1] }}
        // transition={{ type: "spring", duration: 3 }}
        className="Ad_card"
      >
        <div className="img_container">
          {/* <img
            src="https://source.unsplash.com/600x600/?advertisements,product"
            alt="Advertisement"
          /> */}
          <Adsense
            client="ca-pub-2178006875471084"
            slot="6439554681"
            style={{ width: 800, height: 400 }}
            format=""
          />
        </div>
        <br />
        {displayBtn ? (
          <div className="Ad_timer_container">
            <div className="Ad_Skip_button" onClick={handleClick1}>
              Skip
            </div>
          </div>
        ) : (
          <div className="Ad_timer_container">
            <div className="Ad_timer">
              <b>{counter}</b>
            </div>
          </div>
        )}
        <div className="auto_skip_space">

          {displayBtn ? (
            <div className="button_container">
              {/* your page will load automatically after {fourceCounter} */}
              <b className="auto_skip">
                Ad will auto skip after&nbsp;<span>{fourceCounter}</span>
              </b>
            </div>
          ) : <div className="" />}
        </div>
      </motion.div>
    </div>
  );
}

export default Ad2;
