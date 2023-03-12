import React from "react";
import {Home} from './Components/HomePage';
import {State} from './Components/state';
import Credentials from './Components/Credentials';
import Result from './Components/Result';
import { University, Label} from './Components/University';
import Year from './Components/Year';
import Ad from './Components/Ad';
import Ad2 from './Components/Ad2';
// import Label from './Components/Label';
import Accordian from './Components/Accordian';
import {UnLabel} from './Components/Department';
import {DpLabel} from './Components/Semester';
import ShowResult from './Components/ShowResult';
import ResultWindow from './Components/ResultWindow';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/state" element={< State />}>
          </Route>
          <Route exact path="/un" element={< University />}>
          </Route>
          <Route exact path="/year" element={< Year />}>
          </Route>
          <Route exact path="/cr" element={< Credentials />}>
          </Route>
          <Route exact path="/result" element={< Result />}>
          </Route>
          <Route exact path="/ad" element={< Ad />}>
          </Route>
          <Route exact path="/ad2" element={< Ad2 />}>
          </Route>
          <Route exact path="/ac" element={< Accordian />}>
          </Route>
          <Route exact path="/label" element={< Label />}>
          </Route>
          <Route exact path="/label2" element={< UnLabel />}>
          </Route>
          <Route exact path="/label3" element={< DpLabel />}>
          </Route>
          <Route exact path="/sr" element={< ShowResult />}>
          </Route>
          <Route exact path="/rw" element={< ResultWindow />}>
          </Route>
          <Route exact path="/about" element={< About />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}


