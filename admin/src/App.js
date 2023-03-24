import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AdStatus from "./components/AdStatus/AdStatus";
import UploadImage from "./components/uploadingImg/UploadImg";
// import HomePage from "./components/HomePage/Home";
import Home from "./components/HomePage/Home";
import Footer from "./components/footerSection/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/uploadImage" element={<UploadImage />}></Route>
          <Route exact path="/adStatus" element={<AdStatus />}></Route>
          <Route exact path="/footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;