import React from "react";
import { useState } from "react";
import "./add.css";
import toast, { Toaster } from "react-hot-toast";

const Add = (props) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const clearStates = () => {
    setName("");
    setLink("");
  };

  // for get all link for linksType
  const getType1Info = async () => {
    const res = await fetch("http://localhost:4000/getallLinks/links");
    const jsonconvert = await res.json();
    console.log(jsonconvert);
    props.setInfo(jsonconvert);
  };
  const getType2Info = async () => {
    const res2 = await fetch("http://localhost:4000/getallLinks/more from us");
    const jsonconvert2 = await res2.json();
    console.log(jsonconvert2);
    props.setInfo(jsonconvert2);
  };

  const addNewMenu = async () => {
    if (name === "") {
      toast.error("Invalid field name!", { id: "clipboard4" });
    } else if (link === "") {
      toast.error("Invalid field link!", { id: "clipboard5" });
    } else {
      const promise = await fetch("http://localhost:4000/admin/addFooterLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: props.type,
          name: name,
          link: link,
        }),
      })
        .then((res) => {
          toast.success("Added Successfully !", { id: "add" });
          if (props.type === "links") {
            getType1Info();
          } else {
            getType2Info();
          }
          clearStates();
          props.setAdd(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    if (props.type === "links") {
      getType1Info();
    } else {
      getType2Info();
    }
    // props.getAllMenus();
  };
  return (
    <div className="addContainer">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="subContainer">
        <div className="form1">
          <div className="element">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="eg. Link_name"
            />
          </div>
          <div className="element">
            <label>Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="www.link.com"
            />
          </div>
        </div>
        <div className="btns">
          <button onClick={addNewMenu}>Add</button>
          <button id="cancle" onClick={() => props.setAdd(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
