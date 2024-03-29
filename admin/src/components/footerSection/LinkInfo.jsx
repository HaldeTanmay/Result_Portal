import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

import toast, { Toaster } from "react-hot-toast";

const LinkInfo = (props) => {
  const [name, setName] = useState(props.name);
  const [link, setLink] = useState(props.link);
  const [display, setDisplay] = useState("block");

  const updateData = async (id) => {
    console.log(props.type, props.select);
    await fetch("http://localhost:4000/admin/updateFooterLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        type: props.type,
        name: name,
        link: link,
      }),
    }).then((res) => {
      toast.success("Data Updated Successfully.", { id: "link1" });
    });
  };

  const deleteData = async (id) => {
    await fetch("http://localhost:4000/admin/removeFooterLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    setDisplay("none");
  };

  return (
    <div
      id={props.id === 1 ? "addbox" : null}
      className={props.rowSelect === props.id ? "row active" : "row"}
      style={{
        display: display === "none" ? "none" : null,
      }}
      onClick={() => props.setRowSelect(props.id)}
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <span
        onClick={() => {
          props.setRowSelect(props.id);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => {
            props.setRowSelect(props.id);
            console.log(props.id);
          }}
        />
      </span>
      <span
        onClick={() => {
          props.setRowSelect(props.id);
        }}
      >
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onFocus={() => {
            props.setRowSelect(props.id);
            console.log(props.id);
          }}
        />
      </span>
      <span
        onClick={() => {
          props.setRowSelect(props.id);
        }}
      >
        <RxUpdate
          size={20}
          className="btn1"
          onFocus={() => {
            props.setRowSelect(props.id);
            console.log(props.id);
          }}
          onClick={() => updateData(props.id)}
        />
      </span>
      <span
        onClick={() => {
          props.setRowSelect(props.id);
        }}
      >
        <RiDeleteBin6Fill
          size={20}
          className="btn2"
          onFocus={() => {
            props.setRowSelect(props.id);
            console.log(props.id);
          }}
          onClick={() => {
            deleteData(props.id);
          }}
        />
      </span>
    </div>
    // <div
    //   className="subContainer"
    //   style={{ display: display == "none" ? "none" : null }}
    // >
    //   <div className="name">
    //     <label>Name</label>
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       on
    //     />
    //   </div>
    //   <div className="Link">
    //     <label>Link</label>
    //     <input
    //       type="text"
    //       value={link}
    //       onChange={(e) => setLink(e.target.value)}
    //     />
    //   </div>
    //   <div className="btns">
    //     <button onClick={() => updateData(props.id)}>Save</button>
    //     {props.type != "add" ? (
    //       <button onClick={() => deleteData(props.id)}>delete</button>
    //     ) : null}
    //   </div>
    // </div>
  );
};

export default LinkInfo;
