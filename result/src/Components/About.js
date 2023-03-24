import React from "react";
import "../Comp_css/About.css";
import Lottie from "lottie-react";
import team from "../Images/81450-team.json";
import about_title from "../Images/116607-about-title.json";
import photo from '../Images/bg2.jpeg'
import NavigationMenu from './HomePage/Hamburger/NavigationMenu';
import ReactGA from "react-ga4";

const About = () => {
  ReactGA.send({ hitType: "pageview", page: "/about", title: "About_Page" });
  return (
    <>
      <NavigationMenu />
      {/* <div className="navbar">
        <h2>Navbar</h2>
      </div> */}
      <div className="about_us">
        <div className="about_heading_container">
          <div className="about_section_heading">
            {/* <img src="../Images/about_title.gif" alt="About Us" /> */}
            <Lottie
              className="about_section_heading_image"
              animationData={about_title}
              loop={true}
            />
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
            <br />
            <p style={{ color: "#FFCD00", fontSize: "20px" }}>
              ★★★★★ &nbsp;{" "}
              <span style={{ color: "#000", fontSize: "16px" }}>sit amet</span>
            </p>
          </div>

          <div className="about_section_image_container">
            <Lottie
              className="about_section_image"
              animationData={team}
              loop={true}
            />
          </div>
        </div>

        <section className="our_story_section">
          <div className="our_story_section_container">
            <p>Lorem ipsum dolor</p>
            <h1>Our Story</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section className="about_us_our_team">
          <div className="our_story_section_container">
            <p>Lorem ipsum dolor</p>
            <h1>Our Team</h1>
          </div>

          <div className="about_us_card_container">
            <div className="about_us_card">
              <div className="about_us_card_heading">
                {/* <img src="https://ibb.co/dcMnRGm" alt="" /> */}
                {/* <img
                  src="https://i.ibb.co/RSbLqzj/circle-image.png"
                  alt="circle-image"
                /> */}
                <img
                  src={photo}
                  alt="circle-image"
                />
                <h2>name</h2>
              </div>
              <p>CEO & Founder</p>
              <br />
              <p>
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <br />
              <p>proident@exmaple.com</p>
              <br />
              <button>Contact</button>
            </div>
            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img
                  src={photo}
                  alt="circle-image"
                />
                <h2>name</h2>
              </div>
              <p>CEO & Founder</p>
              <br />
              <p>
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <br />
              <p>proident@exmaple.com</p>
              <br />
              <button>Contact</button>
            </div>
            <div className="about_us_card">
              <div className="about_us_card_heading">
                {/* <img
                  src="https://i.ibb.co/RSbLqzj/circle-image.png"
                  alt="circle-image"
                /> */}
                <img
                  src={photo}
                  alt="circle-image"
                />
                <h2>name</h2>
              </div>
              <p>CEO & Founder</p>
              <br />
              <p>
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <br />
              <p>proident@exmaple.com</p>
              <br />
              <button>Contact</button>
            </div>
          </div>
        </section>

        <footer className="footer"></footer>
      </div>
    </>
  );
};

export default About;
