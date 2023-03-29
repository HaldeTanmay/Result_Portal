import React from "react";
import "../Comp_css/About.css";
import Lottie from "lottie-react";
import team from "../Images/81450-team.json";
import about_title from "../Images/116607-about-title.json";
import photo from "../Images/bg2.jpeg";
import tanmay from "../Images/profile_img/tanmay.jpeg";
import aditya from "../Images/profile_img/aditya.jpeg";
import ankush from "../Images/profile_img/ankush.jpeg";
import ruchika from "../Images/profile_img/ruchika.jpeg";
import parmeet from "../Images/profile_img/parmeet.png";
import NavigationMenu from "./HomePage/Hamburger/NavigationMenu";

const About = () => {
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

        <section className="about_us_our_team textalign_center">
          <div className="our_story_section_container">
            <p>Lorem ipsum dolor</p>
            <h1>Meet the Executive Team</h1>
          </div>

          <div className="about_us_card_container">
            <div className="about_us_card">
              <div className="about_us_card_heading">
                {/* <img src="https://ibb.co/dcMnRGm" alt="" /> */}
                {/* <img
                  src="https://i.ibb.co/RSbLqzj/circle-image.png"
                  alt="circle-image"
                /> */}
                <img src={photo} alt="circle-image" />
                <h3>Ronak Poddar</h3>
              </div>
              <p className="noone">CEO & Founder</p>
              <br />
              <p>
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <br />
              <p className="someone">proident@exmaple.com</p>
              <br />
              <a href="" target="__blank">
                <button>Contact</button>
              </a>
            </div>
            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={photo} alt="circle-image" />
                <h3>Ankita mam</h3>
              </div>
              <p className="noone">CEO & Founder</p>
              <br />
              <p>
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <br />
              <p className="someone">proident@exmaple.com</p>
              <br />
              <a href="" target="__blank">
                <button>Contact</button>
              </a>
            </div>
          </div>
        </section>
        <section className="textalign_center">
          <div className="our_story_section_container">
            {/* <p>Lorem ipsum dolor</p> */}
            <h1>Meet the Core Team</h1>
          </div>
          <div className="about_us_card_container core_team_background_color">
            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={tanmay} alt="circle-image" />
                <h3>Tanmay Anil Halde</h3>
              </div>
              <p className="noone">
                Bachelor of Engineering in Information Technology
              </p>
              <br />
              <p>
                I am just a student who's aim is to just explore new
                technologies and gain knowledge from it as much as possible
              </p>
              <br />
              <p className="someone">tanmayhalde27@gmail.com</p>
              <br />
              <a
                href="https://drive.google.com/file/d/1iL1uFwg1N1Gsv_ZdUl112yWxe1q2Xypi/view?usp=share_link"
                target="__blank"
              >
                <button>Contact</button>
              </a>
            </div>

            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={parmeet} alt="circle-image" />
                <h3>Parmeet Singh</h3>
              </div>
              <p className="noone">
                Bachelor of Engineering in Computer Science and Engineering
              </p>
              <br />
              <p>
                Hi, I am a web developer with experience and great skills and I
                am open to collab on projects.
              </p>
              <br />
              <p className="someone">singhparmeet171@gmail.com</p>
              <br />
              <a
                href="https://drive.google.com/file/d/1eY0EUa44m3f4Wx2b_e6bcW3Gzc9i6oX3/view"
                target="__blank"
              >
                <button>Contact</button>
              </a>
            </div>

            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={ankush} alt="circle-image" />
                <h3>Ankush mehra</h3>
              </div>
              <p className="noone">
                Bachelor of Engineering in Computer Science and Engineering
              </p>
              <br />
              <p>
                A passionate Web developer eager to learn and develope new
                technologies believe in collaborative learning let's learn and
                grow together.
              </p>
              <br />
              <p className="someone">mehraankush36@gmail.com</p>
              <br />
              <a href="" target="__blank">
                <button>Contact</button>
              </a>
            </div>

            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={aditya} alt="circle-image" />
                <h3>Aditya Prakash Waskar</h3>
              </div>
              <p className="noone">
                Bachelor of Engineering in Information Technology
              </p>
              <br />
              <p>
                Programming enthusiastic | web developer | competitive
                programmer
              </p>
              <br />
              <p className="someone">adityawaskar03@gmail.com</p>
              <br />
              <a
                href="https://drive.google.com/file/d/1sZDf6dMgh_HhzflUlQz5EBXRSwM3W9xv/view?usp=share_link
"
                target="__blank"
              >
                <button>Contact</button>
              </a>
            </div>

            <div className="about_us_card">
              <div className="about_us_card_heading">
                <img src={ruchika} alt="circle-image" />
                <h3>Ruchika Soni</h3>
              </div>
              <p className="noone">Master of science in computer science</p>
              <br />
              <p>
                Worked as a frontend developer for this website by coordinate
                with team . I utilize my skills in HTML, CSS, React js and
                Bootstrap to develop websites that meet all the requirements of
                the client.
              </p>
              <br />
              <p className="someone">savrnkarruchika25@gmail.com</p>
              <br />
              <a
                href="https://drive.google.com/file/d/1YAt3qvwTirXPixKOLNvYzespDkLCYK7Q/view?usp=sharing"
                target="__blank"
              >
                <button>Contact</button>
              </a>
            </div>
          </div>
        </section>

        <footer className="footer"></footer>
      </div>
    </>
  );
};

export default About;
