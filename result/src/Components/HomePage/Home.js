import { useState } from "react";
import Svgs from "./Svgs/Svgs";
import NavigationMenu from "./Hamburger/NavigationMenu";
import "./Home.css";

function Home() {
  const [click, Setclick] = useState(true);

  const handleclick = () => {
    Setclick(!click);
  };
  return (
    <div className="Home">
      <NavigationMenu />
      {/* <Navbar/> */}
      <Svgs />
      <div className={click ? "app_cookie" : "displaynone"}>
        <span onClick={handleclick}>x</span>
        <p>
          This site uses cookies. By continuing to browse the site you are
          agreeing to our use of cookies
        </p>
      </div>
    </div>
  );
}

export default Home;
