import React, { useState, useEffect } from "react";
import { storage } from "../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./uploadImg.css";
import Navbar from "../HomePage/Hamburger/NavigationMenu";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

// const state = ["Maharaastra", "Pune"];
// const collegeNames = ["SLRTCE", "Athrva"];
function UploadImage() {
  const [stateList, setStateList] = useState([]);
  const [collegeNameList, setCollegeNameList] = useState(["Select"]);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [filePath, setFilePath] = useState(null);
  const [disclaimer, setDisclaimer] = useState("");
  const [stateName, setStateName] = useState("Select");
  const [collegeName, setCollegeName] = useState("Select");
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = filePath;
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
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
          // console.log(collegeName, stateName, downloadURL);
          setImgUrl(downloadURL);
          sendToDatabase(downloadURL);
        });
      }
    );
  };
  const sendToDatabase = async (downloadURL) => {
    console.log(
      JSON.stringify({
        collegeName,
        stateName,
        downloadURL,
        disclaimer,
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
        logo: downloadURL,
        disclaimer: disclaimer,
      }),
    })
      .then((res) => console.log(res))
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
      <div className="ad_control_label" style={{ marginBottom: "5rem" }}>Logo Control</div>
        <form className="form" onSubmit={handleSubmit}>
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
                    // <option value={d} key={d}>
                    //   {d}
                    // </option>
                    <MenuItem value={d} key={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>

                {/* <label> State Name</label>
              <select
                name="states"
                id="states"
                value={stateName}
                onChange={getAllColleges}
                onChange={(e) => setStateName(e.target.value)}
              >
                {stateList.map((d) => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </select> */}
              </div>

              <div className="collegeName gap">
                {/* <label> College Name</label>
              <select
                name="collegeNames"
                id="collegeNames"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              >
                {collegeNameList.map((d) => (
                  <option value={d} key={d}>
                    {d}
                  </option>
                ))}
              </select> */}
                <TextField
                  // id="filled-basic"
                  select
                  label="College Name"
                  name="collegeNames"
                  id="collegeNames"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  variant="filled"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  {collegeNameList.map((d) => (
                    // <option value={d} key={d}>
                    //   {d}
                    // </option>
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
                <div className="custom_choose">Upload Your Image</div>
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
            {imgUrl && (
              <div>
                <p>State : {stateName}</p>
                <p>Collge Name : {collegeName}</p>
                <p>Disclaimer : {disclaimer}</p>
                <img src={imgUrl} alt="uploaded file" height={200} />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
export default UploadImage;
