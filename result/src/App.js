import React from "react";
import Home from './Components/Home';
import State from './Components/State';
import { Credentials } from './Components/Credentials';
import { Result } from './Components/Result';
import University from './Components/University';
import Year from './Components/Year';
import Ad from './Components/Ad';
import Label from './Components/Label';
import Accordian from './Components/Accordian';
import UnLabel from './Components/UnLabel';
import DpLabel from './Components/DpLabel';
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
          <Route exact path="/credential" element={< Credentials />}>
          </Route>
          <Route exact path="/result" element={< Result />}>
          </Route>
          <Route exact path="/ad" element={< Ad />}>
          </Route>
          <Route exact path="/ac" element={< Accordian />}>
          </Route>
          <Route exact path="/label" element={< Label />}>
          </Route>
          <Route exact path="/label2" element={< UnLabel />}>
          </Route>
          <Route exact path="/label3" element={< DpLabel />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}


