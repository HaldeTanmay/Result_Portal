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
  const addNewMenu = async () => {
    if (name === "") {
      toast.error("Invalid field name!", { id: "clipboard1" });
    } else if (link === "") {
      toast.error("Invalid field link!", { id: "clipboard2" });
    } else {
      const promise = await fetch("http://localhost:4000/admin/addMenuLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      })
        .then((res) => {
          //   console.log(res);
          props.getAllMenus();
          toast.success("Added Successfully !", { id: "clipboard" });
          clearStates();

          props.setAdd(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    props.getAllMenus();
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
              placeholder="eg. Home"
            />
          </div>
          <div className="element">
            <label>Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="www.home.com"
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
