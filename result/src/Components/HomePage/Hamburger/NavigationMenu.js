import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
const StyledBurger = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 10001;
  display: flex;
  justify-content: space-around;
  // align-items: left;
  // align-items: right;
  align-items: center;
  flex-flow: column nowrap;
  // background-color: #fff;
  // padding: 12px 0px 12px 15px;
  // padding: 12px 5px;
  padding: 10px 5px;
  border-radius: 5rem;
  div {
    width: 2rem;
    // height: 0.25rem;
    // background-color: ${({ open }) => (open ? "#002f75" : "#fff")};
    background-color: ${({ open }) => (open ? "#002f75" : "rgb(11, 0, 109)")};
    // background-color: ${({ open }) => (open ? "#002f75" : "#002f75")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: 2.3rem;
      height: 0.4rem;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      width: ${({ open }) => (open ? "2.3rem" : "1.5rem")};
      height: 0.4rem;
      margin-right: ${({ open }) => (open ? "0" : "-12px")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "2.2rem" : "1rem")};
      height: 0.4rem;
      margin-right: ${({ open }) => (open ? "0" : "-20px")};
    }
  }
`;
const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #fff;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 230px;
  padding-top: 5rem;
  display: flex;
  align-items: center;

  transition: transform 0.3s ease-in-out;
  z-index: 10000;
  Link {
    color: #fff;
  }
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([]);

  // for get all link for linksType
  const getAllLinks = async () => {
    const res = await fetch("http://localhost:4000/getallMenuLinks");
    const jsonconvert = await res.json();
    setLinks(jsonconvert);
    console.log(jsonconvert);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <>
      <div>
        <StyledBurger
          className="background_circle"
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>

        <Ul className="home_sidebar_links_container" open={open}>
          <div>
             <Link className="home_sidebar_links_container_Link" to="/">
                <div> <AiFillHome/> Home</div>
             </Link>
          </div>
           <div>
             <Link className="home_sidebar_links_container_Link" to="/about">
              <div><BsFillPeopleFill/> About</div>
             </Link>
           </div>
          <div>
              {links.map((d) => (
                <Link className="home_sidebar_links_container_Link" to={d.link}>
                  <div>{d.name}</div>
                </Link>
              ))}
          </div>
       
        </Ul>
      </div>
    </>
  );
};

export default Navbar;
