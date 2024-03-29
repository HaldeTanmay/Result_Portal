import React, { useState, useEffect } from "react";
import { storage } from "../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import { motion } from "framer-motion";

import Navbar from "../HomePage/Hamburger/NavigationMenu";
import "./uploadImg.css";

const romanToInt = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  v: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
};

function UploadImage() {
  const [stateList, setStateList] = useState([]);
  const [collegeNameList, setCollegeNameList] = useState(["Select"]);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [filePath, setFilePath] = useState(null);
  const [disclaimer, setDisclaimer] = useState("");
  const [stateName, setStateName] = useState(["Select"]);
  const [collegeName, setCollegeName] = useState(["Select"]);
  const [AllSem, SetAllSem] = useState(["Select"]);
  const [sem, setSem] = useState(AllSem[0]);
  const [departmentList, setdepartmentList] = useState(["Select"]);
  const [department, setdepartment] = useState(departmentList[0]);

  const clearStates = () => {
    setCollegeNameList(["Select"]);
    setImgUrl(null);
    setProgresspercent(0);
    setFilePath(null);
    setDisclaimer("");
    // setStateList(["Select"]);
    setStateName(stateList[0]);
    setCollegeNameList(["Select"]);
    setCollegeName(collegeNameList[0]);
    SetAllSem(["Select"]);
    setSem(AllSem[0]);
    setdepartmentList(["Select"]);
    setdepartment(departmentList[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = filePath;
    console.log("file not found");
    if (!file || file == "Upload Your Image") return;
    const storageRef = ref(storage, `/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          sendToDatabase(downloadURL);
        });
      }
    );
  };
  const sendToDatabase = async (downloadURL) => {
    console.log(
      JSON.stringify({
        un_name: collegeName,
        state: stateName,
        department: department,
        sem: romanToInt[sem],
        logo: downloadURL,
        disclaimer: disclaimer,
      })
    );
    const res = await fetch("http://localhost:4000/admin/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        un_name: collegeName,
        state: stateName,
        department: department,
        sem: romanToInt[sem],
        logo: downloadURL,
        disclaimer: disclaimer,
      }),
    })
      .then((res) => {
        alert("Logo Uploaded Successfully");
        clearStates();
      })
      .catch((e) => console.log(e));
  };

  const getAllColleges = (e) => {
    setStateName(e.target.value);
    fetch(`http://localhost:4000/allUniversities/${e.target.value}`)
      .then((res) => res.json())
      .then((json) => {
        let data = ["Select", ...json];
        setCollegeNameList(data);
        console.log(json);
      });
  };

  const getALLDepartment = (e) => {
    setCollegeName(e.target.value);
    fetch(
      `http://localhost:4000/allUniversities/${stateName}/${e.target.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        let data = ["Select", ...json];
        setdepartmentList(data);
        console.log(json);
      });
  };

  const getAllSem = (e) => {
    setdepartment(e.target.value);
    fetch(
      `http://localhost:4000/allUniversities/${stateName}/${collegeName}/${e.target.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        let data = ["Select", ...json];
        SetAllSem(data);
        console.log(json);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4000/allStates`)
      .then((res) => res.json())
      .then((json) => {
        // jsondata = json;
        let data = ["Select", ...json];
        setStateList(data);
        // console.log(json);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="UploadImageContainer">
        <div className="ad_control_label" style={{ marginBottom: "5rem" }}>
          Logo Control
        </div>
        <motion.form
          animate={{ y: [30, 0], opacity: [0.6, 1] }}
          transition={{ type: "spring", duration: 3 }}
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="textfield_container">
            <div className="state_college_container">
              <div className="stateName gap">
                <TextField
                  // id="filled-basic"
                  select
                  label="State Name"
                  name="states"
                  id="states"
                  value={stateName}
                  onChange={getAllColleges}
                  variant="filled"
                  style={{ width: "100%" }}
                  color="primary"
                >
                  {stateList.map((d) => ( 
                    <MenuItem value={d} key={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="collegeName gap">
                <TextField
                  // id="filled-basic"
                  select
                  label="College Name"
                  name="collegeNames"
                  id="collegeNames"
                  value={collegeName}
                  onChange={getALLDepartment}
                  variant="filled"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  {collegeNameList.map((d) => (
                    <MenuItem value={d} key={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="departmentName gap">
                <TextField
                  // id="filled-basic"
                  select
                  label="Department Name"
                  name="departmentNames"
                  id="departmentNames"
                  value={department}
                  onChange={getAllSem}
                  variant="filled"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  {departmentList.map((d) => (
                    <MenuItem value={d} key={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="SemName gap">
                <TextField
                  select
                  label="Semester"
                  name="Semesters"
                  id="Semesters"
                  value={sem}
                  onChange={(e) => setSem(e.target.value)}
                  variant="filled"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  {AllSem.map((d) => (
                    <MenuItem value={d} key={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="typeFile gap">
              {/* <label>Upload Your Image</label> */}
              <input
                type="file"
                onChange={(e) => setFilePath(e.target.files[0])}
                id="actual_btn"
                style={{ display: "none" }}
              />
              <label for="actual_btn">
                <div className="custom_choose">
                  {filePath ? filePath.name : "Upload Your Image"}
                </div>
              </label>
            </div>

            <div className="disclaimerText gap">
              {/* <label>Disclaimer</label>
              <input type="file" onChange={(e) => setFilePath(e.target.files[0])} />
              <textarea
                name="diclaimer"
                id="diclaimer"
                cols="30"
                rows="3"
                value={disclaimer}
                onChange={(e) => setDisclaimer(e.target.value)}
              ></textarea> */}

              <TextField
                // id="filled-basic"
                label="Disclaimer"
                name="diclaimer"
                id="diclaimer"
                cols="30"
                rows="3"
                value={disclaimer}
                onChange={(e) => setDisclaimer(e.target.value)}
                variant="filled"
                style={{ width: "100%", textAlign: "left" }}
              ></TextField>
            </div>
            <button className="upload_button" type="submit">
              Upload
            </button>
            {!imgUrl && (
              <div className="outerbar">
                <div className="innerbar">{progresspercent}%</div>
              </div>
            )}
            {/* {progresspercent == 100 && alert("Logo Uploaded Successfully")} */}
            {/* {imgUrl && (
              <div>
                <p>State : {stateName}</p>
                <p>Collge Name : {collegeName}</p>
                <p>Disclaimer : {disclaimer}</p>
                <img src={imgUrl} alt="uploaded file" height={200} />
              </div>
            )} */}
          </div>
        </motion.form>
      </div>
    </>
  );
}
export default UploadImage;
