import React, { useState, useEffect } from "react";
import LinkInfo from "./LinkInfo";
import { motion } from 'framer-motion'
import { MdOutlineAddBox } from "react-icons/md";
import Add from "./Add";

import "./footer.css";
import Navigation from "../HomePage/Hamburger/NavigationMenu"


const Footer = () => {
  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState([]);
  const [select, setSelect] = useState("type1");
  const [rowSelect, setRowSelect] = useState("");

  // for get all link for linksType
  const getType1Info = async () => {
    const res = await fetch("http://localhost:4000/getallLinks/links");
    const jsonconvert = await res.json();
    console.log(jsonconvert[0]["_id"]);
    setInfo(jsonconvert);
  };
  const getType2Info = async () => {
    const res2 = await fetch("http://localhost:4000/getallLinks/more from us");
    const jsonconvert2 = await res2.json();
    setInfo(jsonconvert2);
  };
  console.log(select);
  useEffect(() => {
    getType1Info();
  }, []);

  return (
    <div className="footerContainer">
      <Navigation />
      <div className="top">Footer Control</div>
      <motion.div 
        animate={{ y: [30, 0], opacity: [0.6, 1] }}
        transition={{ type: "spring", duration: 3 }}
        className="footerSubcontainer"
        >
        <div className="left">
          <div
            className={`info type1Info ${select === "type1" ? "active" : null}`}
            onClick={() => {
              setSelect("type1");
              getType1Info();
            }}
          >
            Links
          </div>
          <div
            className={`info type1Info ${select === "type2" ? "active" : null}`}
            onClick={() => {
              setSelect("type2");
              getType2Info();
            }}
          >
            More From Us
          </div>
        </div>
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
                  type={select === "type1" ? "links" : "more from us"}
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
      {add ? (
        <Add
          // getAllLinks={select === "type1" ? getType1Info : getType2Info}
          setInfo={setInfo}
          setAdd={setAdd}
          type={select === "type1" ? "links" : "more from us"}
        />
      ) : null}
    </div>
  );
};

export default Footer;
