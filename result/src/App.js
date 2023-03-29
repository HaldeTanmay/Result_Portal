import React from "react";
import { Home } from "./Components/HomePage";
import { State } from "./Components/state";
import Credentials from "./Components/Credentials";
import Result from "./Components/Result";
import { University, Label } from "./Components/University";
import Year from "./Components/Year";
import Ad from "./Components/Ad";
import Ad2 from "./Components/Ad2";
// import Label from './Components/Label';
import Accordian from "./Components/Accordian";
import { UnLabel } from "./Components/Department";
import { DpLabel } from "./Components/Semester";
import ShowResult from "./Components/ShowResult";
import ResultWindow from "./Components/ResultWindow";
import GoogleAd from "./Components/GoogleAd";
import About from "./Components/About";
import Enquiry from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ad3 from "./Components/Ad3";
import QrResult from "./Components/QrResult";
import Eg from "./Components/Eg";
import ReactGA from "react-ga4";

export default function App() {
  const TRACKING_ID = "G-9XVGTRXRWN";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home_Page" });
  // ReactGA.send({ hitType: "pageview", page: "/state", title: "State_Page" });
  // ReactGA.send({ hitType: "pageview", page: "/un", title: "University_Page" });
  // ReactGA._gaCommandSendPageview(document.location.pathname);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/state" element={<State />}></Route>
          <Route exact path="/un" element={<University />}></Route>
          <Route exact path="/year" element={<Year />}></Route>
          <Route exact path="/cr" element={<Credentials />}></Route>
          <Route exact path="/result" element={<Result />}></Route>
          <Route exact path="/ad" element={<Ad />}></Route>
          <Route exact path="/ad2" element={<Ad2 />}></Route>
          <Route exact path="/ac" element={<Accordian />}></Route>
          <Route exact path="/label" element={<Label />}></Route>
          <Route exact path="/label2" element={<UnLabel />}></Route>
          <Route exact path="/label3" element={<DpLabel />}></Route>
          <Route exact path="/sr" element={<ShowResult />}></Route>
          <Route exact path="/rw" element={<ResultWindow />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/ad3" element={<Ad3 />}></Route>
          <Route exact path="/my" element={<GoogleAd />}></Route>
          <Route exact path="/eg" element={<Eg />}></Route>
          <Route exact path="/footer" element={<Enquiry />}></Route>
          {/* <Route exact path="/result/:name" element={<QrResult />}></Route> */}
          <Route exact path="/result/:name/:roll/:s_name/:un_name/:dp_name/:sem/:year/:exam_name" element={<QrResult />}></Route>
        </Routes>
      </Router>
    </>
  );
}
