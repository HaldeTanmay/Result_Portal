import React, { useState, useEffect } from "react";
import "./footer.css";
import LinkInfo from "./LinkInfo";
import { MdOutlineAddBox } from "react-icons/md";

const Footer = () => {
  // const [name]
  const [links, setLinks] = useState([]);
  const [moreFromUs, setMoreFormUs] = useState([]);
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

  useEffect(() => {
    getType1Info();
  }, []);

  return (
    <div className="footerContainer">
      <div className="top">Footer Control</div>
      <div className="footerSubcontainer">
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
          <table>
            <tbody>
              <tr>
                <th>Names</th>
                <th>Links</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
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
              {add ? (
                <LinkInfo
                  id={1}
                  setRowSelect={setRowSelect}
                  rowSelect={rowSelect}
                  key={1}
                  name={""}
                  link={""}
                  type="add"
                  select={select}
                  setInfo={setInfo}
                />
              ) : null}
            </tbody>
          </table>
          <div className="addBtn">
            <button onClick={() => setAdd(!add)}>Add</button>
            {/* <MdOutlineAddBox size={50} onClick={() => setAdd(!add)} /> */}
          </div>

          {/* <div className="allLinks">
            {links.map((d) => (
              <LinkInfo
                key={d["_id"]}
                id={d["_id"]}
                name={d["name"]}
                link={d["link"]}
                type="links"
              />
            ))}
          </div> */}
        </div>
        {/* <div className="type1Info">
          <h1>Links </h1>
          <div className="allLinks">
            {links.map((d) => (
              <LinkInfo
                key={d["_id"]}
                id={d["_id"]}
                name={d["name"]}
                link={d["link"]}
                type="links"
              />
            ))}
          </div>
        </div>
        <br />
        <br />
        <div className="type2Info">
          <h1>More from Us</h1>
          <div className="allLinks">
            {moreFromUs.map((d) => (
              <LinkInfo
                key={d["_id"]}
                id={d["_id"]}
                name={d["name"]}
                link={d["link"]}
                type="more from us"
              />
            ))}
          </div>
        </div>
        <div className="addBtn">
          <MdOutlineAddBox size={50} onClick={() => setAdd(!add)} />
        </div>
        {add ? <LinkInfo key={1} name={""} link={""} type="add" /> : null}

        <br />
        <br /> */}
      </div>
    </div>
  );
};

export default Footer;
