import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AdStatus from "./components/AdStatus/AdStatus";
import UploadImage from "./components/uploadingImg/UploadImg";
// import HomePage from "./components/HomePage/Home";
import Home from "./components/HomePage/Home";
import Homelanding from "./components/HomePage/Homelanding";
import Footer from "./components/footerSection/Footer";
import Menu from "./components/menuSection/Menu";
// import HomeLanding

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/Home" element={<HomeLanding />}></Route> */}
          <Route exact path="/Home" element={<Homelanding />}></Route>
          <Route exact path="/uploadImage" element={<UploadImage />}></Route>
          <Route exact path="/adStatus" element={<AdStatus />}></Route>
          <Route exact path="/footer" element={<Footer />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
