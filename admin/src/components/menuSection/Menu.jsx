import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import Add from "./Add";
import LinkInfo from "./LinkInfo";
import Navbar from "../HomePage/Hamburger/NavigationMenu";
import "./menu.css";

const Menu = () => {
  // const [name]
  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState([]);
  const [rowSelect, setRowSelect] = useState("");

  // for get all link for linksType
  const getAllMenus = async () => {
    const res = await fetch("http://localhost:4000/getallMenuLinks");
    const jsonconvert = await res.json();
    // console.log(jsonconvert[0]["_id"]);
    setInfo(jsonconvert);
  };

  useEffect(() => {
    getAllMenus();
  }, []);

  return (
    <>
    <Navbar />
    <div className="menuContainer">
      <div className="top">Menu Control</div>
      <motion.div 
        animate={{ y: [30, 0], opacity: [0.6, 1] }}
        transition={{ type: "spring", duration: 3 }}
        className="menuSubcontainer"
      >
        <div className="left">Menu</div>
        <div className="right">
          <div className="main">
            <div className="row header">
              <span>Names</span>
              <span>Links</span>
              <span>Update</span>
              <span>Remove</span>
            </div>
            <div className="values">
              {info.map((d) => (
                <LinkInfo
                  key={d["_id"]}
                  id={d["_id"]}
                  name={d["name"]}
                  link={d["link"]}
                  type="links"
                  setRowSelect={setRowSelect}
                  rowSelect={rowSelect}
                />
              ))}
            </div>
          </div>
          <div className="addBtn">
            <button onClick={() => setAdd(!add)}>Add</button>
          </div>
        </div>
      </motion.div>
      {add ? <Add setAdd={setAdd} getAllMenus={getAllMenus} /> : null}
    </div>
    </>
  );
};

export default Menu;
