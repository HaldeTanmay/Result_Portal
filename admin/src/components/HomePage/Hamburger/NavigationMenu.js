import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
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
  width: 300px;
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
          <Link className="home_sidebar_links_container_Link" to="/Home">
            Home
          </Link>
          {/* <Link className="home_sidebar_links_container_Link" to="/about">
            About
          </Link> */}
          <Link to="/menu" className="home_sidebar_links_container_Link">
            Menu Control
          </Link>
          <Link to="/adStatus" className="home_sidebar_links_container_Link">
            Ad Control
          </Link>
          <Link className="home_sidebar_links_container_Link" to="/uploadImage">
            Add Logo
          </Link>
          <Link className="home_sidebar_links_container_Link" to="/footer">
            Footer Control
          </Link>
        </Ul>
      </div>
    </>
  );
};

export default Navbar;
