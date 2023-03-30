import React, { useState, useEffect } from "react";
import "../Comp_css/Footer.css";
import NavigationMenu from "./HomePage/Hamburger/NavigationMenu";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsPinterest, BsWhatsapp } from "react-icons/bs";
import playStore from "../assets/footer/playStore.png";
import amezon from "../assets/footer/amezon.png";

const Enquiry = () => {
  const [links, setLinks] = useState([]);
  const [moreFromUs, setMoreFormUs] = useState([]);

  // for get all link for linksType
  const getAllLinks = async () => {
    const res = await fetch("http://localhost:4000/getallLinks/links");
    const jsonconvert = await res.json();
    setLinks(jsonconvert);

    const res2 = await fetch("http://localhost:4000/getallLinks/more from us");
    const jsonconvert2 = await res2.json();
    setMoreFormUs(jsonconvert2);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <>
      <div style={{ height: "12vh" }}></div>
      <NavigationMenu />
      <footer className="footer_main">
        <div className="foot_cont">
          <div className="top">
            <div className="row footer-col">
              <div id="logoContainer">
                <div className="subSection">
                  <div className="text">
                    <div className="top">ROLLINGNOTES</div>
                    <div className="bottom">
                      <span>WE ROLL, YOU NOTE</span>
                    </div>
                  </div>
                  <img
                    src="https://i0.wp.com/rollingnotes.in/wp-content/uploads/2019/07/onlinelogomaker-122918-1437-0140.png?fit=100%2C100&ssl=1"
                    alt=""
                  />
                </div>
                <h1 id="logo">Parinaam</h1>
              </div>
              <section className="section1">
                <h3> Contact With Us</h3>
                <ul className="ul_hover_effect">
                  <li>
                    <a href="">
                      <FiPhone className="logo" />
                      <span className="content">9644588419</span>
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <AiOutlineMail className="logo" />
                      <span className="content">enquiry@rollingnotes.in</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <GoLocation className="logo" />
                      <span className="content">Assam</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="row" id="row2">
              <div className="subRow2 footer-col">
                <h3> Links</h3>
                <ul className="border">
                  {links.map((d) => (
                    <li key={d["_id"]} id={d["_id"]}>
                      <a href={d["link"]}> {d["name"]}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="subRow2 footer-col">
                <h3> More From us</h3>
                <ul className="border">
                  {moreFromUs.map((d) => (
                    <li key={d["_id"]} id={d["_id"]}>
                      <a href={d["link"]}> {d["name"]}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="appList" className="subRow2 footer-col">
                <h3> Download Our Free App, Now!</h3>
                <div className="download_options">
                  <img
                    // src="../assets/footer/playStore.png"
                    src={playStore}
                    alt="ss"
                  />
                  <img
                    // src="../assets/footer/playStore.png"
                    src={amezon}
                    alt="ss"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>
              Copyright &copy; 2022-2023 Parinaam , parinaam.in and all related
              - All Rights Reserved.
            </p>
            <div className="socialMediaLogos">
              <FaInstagram />
              <AiFillYoutube />
              <FaFacebookF />
              <BsTwitter />
              <BsPinterest />
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Enquiry;
