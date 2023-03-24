import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineDoneAll } from "react-icons/md";

import toast, { Toaster } from "react-hot-toast";

const LinkInfo = (props) => {
  const [name, setName] = useState(props.name);
  const [link, setLink] = useState(props.link);
  const [display, setdisplay] = useState("block");

  const getType1Info = async () => {
    const res = await fetch("http://localhost:4000/getallLinks/links");
    const jsonconvert = await res.json();
    console.log(jsonconvert[0]["_id"]);
    props.setInfo(jsonconvert);
  };
  const getType2Info = async () => {
    const res2 = await fetch("http://localhost:4000/getallLinks/more from us");
    const jsonconvert2 = await res2.json();
    props.setInfo(jsonconvert2);
  };
  const handleClicked = async (id) => {
    if (props.type !== "add") {
      const res = await fetch("http://localhost:4000/admin/updateFooterLink", {
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
      });
      // toast.promise(res, {
      //   loading: "Loading",
      //   success: "Data inserted Successfully",
      //   error: "Error while Inserting",
      // });
      toast.success("Data Updated Successfully");
    } else {
      if (name === "" || link === "") {
        alert("filled the data");
      } else {
        console.log(props.select);
        console.log(props.select === "type1" ? "links" : "more from us");
        const res = await fetch("http://localhost:4000/admin/addFooterLink", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: props.select === "type1" ? "links" : "more from us",
            name: name,
            link: link,
          }),
        });
        // toast.promise(res, {
        //   loading: "Loading",
        //   success: "Data Updated SuccessFully",
        //   error: "Error while Updating",
        // // });
        // res.then((d) => {
        //   if (props.select === "type1") {
        //     getType1Info();
        //   } else {
        //     getType2Info();
        //   }
        // });
        toast.success("Data Added Successfully");
        const a = res;
        console.log(a);
      }
    }
  };

  const deleteData = async (id) => {
    const res = await fetch("http://localhost:4000/admin/removeFooterLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    console.log(res);
    setdisplay("none");
  };

  return (
    <tr
      id={props.id === 1 ? "addbox" : null}
      className={props.rowSelect === props.id ? "active" : "none"}
      style={{
        display: display === "none" ? "none" : null,
      }}
      onClick={() => props.setRowSelect(props.id)}
    >
      <td
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
      </td>
      <td
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
      </td>
      <td
        onClick={() => {
          props.setRowSelect(props.id);
        }}
      >
        {props.type === "add" ? (
          <MdOutlineDoneAll
            size={20}
            onFocus={() => {
              props.setRowSelect(props.id);
              console.log(props.id);
            }}
            onClick={() => handleClicked(props.id)}
          />
        ) : (
          <RxUpdate
            size={20}
            className="btn1"
            onFocus={() => {
              props.setRowSelect(props.id);
              console.log(props.id);
            }}
            onClick={() => handleClicked(props.id)}
          />
        )}
        <Toaster position="bottom-center" reverseOrder={false} />
      </td>
      <td
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
          onClick={() => deleteData(props.id)}
        />
      </td>
    </tr>
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
    //     <button onClick={() => handleClicked(props.id)}>Save</button>
    //     {props.type != "add" ? (
    //       <button onClick={() => deleteData(props.id)}>delete</button>
    //     ) : null}
    //   </div>
    // </div>
  );
};

export default LinkInfo;
