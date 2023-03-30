const express = require("express");
const router = express.Router();

require("../db/conn");
const UserModel = require("../models/Users");
// const un_logo_model = require("../models/Users");
const StudModel = require("../models/Stud");
const footerModel = require("../models/Footer");
const AdModel = require("../models/Ad");
const UniversityInfoModel = require("../models/universityInfo");
const MenuModel = require("../models/menu");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/ad/:num", async (req, res) => {
  try {
    // const data = await AdModel.find();
    const data = await AdModel.distinct("Status", { Ad: req.params.num });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.get("/register", (req, res) => {
  res.send("register");
});
router.get("/un/:s_name", async (req, res) => {
  try {
    const data = await UserModel.distinct("un_name", {
      state: req.params.s_name,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
router.get("/un/:s_name/:un_name", async (req, res) => {
  try {
    const data = await UserModel.distinct("dp_name", {
      state: req.params.s_name,
      un_name: req.params.un_name,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
router.get("/un/:s_name/:un_name/:dp_name", async (req, res) => {
  try {
    const data = await UserModel.distinct("sem", {
      state: req.params.s_name,
      un_name: req.params.un_name,
      dp_name: req.params.dp_name,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.get(
  "/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:name/:roll",
  async (req, res) => {
    try {
      const data = await UserModel.find({
        name: req.params.name,
        state: req.params.s_name,
        un_name: req.params.un_name,
        dp_name: req.params.dp_name,
        exam_name: req.params.exam_name,
        year: req.params.year,
        roll: req.params.roll,
        // roll: `${req.params.roll}.0`,
        sem: req.params.sem,
      });
      res.send(data);
    } catch (e) {
      res.send(e);
    }
  }
);
router.get("/cr/:s_name/:un_name/:dp_name/:year/:sem", async (req, res) => {
  try {
    const data = await UserModel.distinct("exam_name", {
      state: req.params.s_name,
      un_name: req.params.un_name,
      dp_name: req.params.dp_name,
      year: req.params.year,
      sem: req.params.sem,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
router.get("/cr/:s_name/:un_name/:dp_name/:sem/:year/1", async (req, res) => {
  try {
    const data = await UserModel.find({
      state: req.params.s_name,
      un_name: req.params.un_name,
      dp_name: req.params.dp_name,
      sem: req.params.sem,
      year: req.params.year,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.get(
  "/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:roll",
  async (req, res) => {
    try {
      const data = await UserModel.distinct("name", {
        state: req.params.s_name,
        un_name: req.params.un_name,
        dp_name: req.params.dp_name,
        exam_name: req.params.exam_name,
        year: req.params.year,
        roll: req.params.roll,
        // roll: `${req.params.roll}.0`,
        sem: req.params.sem,
      });
      res.send(data);
      // const data = await UserModel.find({ 'name': 'Ajay', 'state': 'Assam', 'un_name': 'a university', 'dp_name': 'IT', 'exam_name': 'UT-2', 'year': '2022-23', 'roll': '1.0' });
      // res.send(data);
    } catch (e) {
      res.send(e);
    }
  }
);
router.get(
  "/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:name/dept/hel",
  async (req, res) => {
    try {
      const data = await UserModel.distinct("roll", {
        name: req.params.name,
        state: req.params.s_name,
        un_name: req.params.un_name,
        dp_name: req.params.dp_name,
        exam_name: req.params.exam_name,
        year: req.params.year,
      });
      res.send(data);
      // const data = await UserModel.distinct('roll', { 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'exam_name': req.params.exam_name, 'year': req.params.year, 'sem': req.params.sem,'name': req.params.name });
      // res.send(data);
      // const data = await UserModel.find({ 'name': 'Ajay', 'state': 'Assam', 'un_name': 'a university', 'dp_name': 'IT', 'exam_name': 'UT-2', 'year': '2022-23', 'name': 'Ajay' });
      // res.send(data);
    } catch (e) {
      res.send(e);
    }
  }
);

router.post("/cr", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "awesome" })
  try {
    const {
      s_name,
      dp_name,
      un_name,
      sem,
      year,
      exam_name,
      name,
      roll,
      mothers_name,
    } = req.body;
    const roll1 = roll;
    // const roll1 = `${roll}.0`;
    if (
      !exam_name ||
      !name ||
      !roll1 ||
      !s_name ||
      !dp_name ||
      !un_name ||
      !sem ||
      !year ||
      !mothers_name
    ) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const userLogin = await UserModel.findOne({
      dp_name: dp_name,
      un_name: un_name,
      sem: sem,
      year: year,
      exam_name: exam_name,
      name: name,
      roll: roll1,
      mothers_name: mothers_name,
    });

    if (userLogin) {
      res.status(999).json({ message: "Result" });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/sr/:s_name/:un_name/:dp_name/:sem/", async (req, res) => {
  try {
    const data = await UserModel.find({
      state: req.params.s_name,
      un_name: req.params.un_name,
      dp_name: req.params.dp_name,
      sem: req.params.sem,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.get("/allStates", async (req, res) => {
  try {
    const data = await UserModel.distinct("state");
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

// gets all the university names respective it's state
router.get("/allUniversities/:state", async (req, res) => {
  try {
    const data = await UserModel.distinct("un_name", {
      state: req.params.state,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/adStatus", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "awesome" })
  try {
    const { Ad, Status } = req.body;

    if (!Ad || !Status) {
      return res.status(400).json({ error: "Plz select write options" });
    }
    const status = await AdModel.updateOne(
      { Ad: Ad },
      { $set: { Status: Status } }
    );
  } catch (e) {
    console.log(e);
  }
});

// upload the Image
router.post("/admin/upload", async (req, res) => {
  try {
    const { un_name, state, logo, disclaimer } = req.body;
    if (!un_name || !state || !logo || !disclaimer) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const findLogo = await UniversityInfoModel.findOne({
      un_name: un_name,
      state: state,
    });
    if (findLogo) {
      await UniversityInfoModel.updateOne(
        { un_name, state },
        { logo, disclaimer }
      );
      res.status(200).json({ message: "Logo Added !" });
    } else {
      const insertLogo = new UniversityInfoModel({
        un_name: un_name,
        state: state,
        logo: logo,
        disclaimer: disclaimer,
      });
      insertLogo.save();
      res.status(200).json({ message: "Logo Added !" });
    }
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// for getting university Logo
router.get("/cr/getUniversityLogo/:state/:un_name", async (req, res) => {
  try {
    // const { un_name } = req.body;
    // console.log(un_name);
    // if (!un_name) {
    //   return res.status(400).json({ error: "Plz filled the data" });
    // }
    console.log(req.params.un_name, req.params.state);
    const findLogo = await UniversityInfoModel.findOne({
      un_name: req.params.un_name,
      state: req.params.state,
    });
    console.log(findLogo);
    res.send(findLogo);
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// ------------------------footer------------------------------
// for uploading footer links
router.post("/admin/addFooterLink", async (req, res) => {
  try {
    const { type, name, link } = req.body;
    if (!type || !name || !link) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const insertLogo = new footerModel({
      type: type,
      name: name,
      link: link,
    });
    const insertNewfooterLink = insertLogo.save();
    res.status(200).json({ message: "footer link Added!" });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// for removing footer link
router.post("/admin/removeFooterLink", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const result = await footerModel.deleteOne({
      _id: id,
    });
    let msg;
    if (result.deletedCount === 1) {
      msg = "Successfully deleted one document.";
    } else {
      msg = "No documents matched the query. Deleted 0 documents.";
    }
    res.status(200).json({ message: msg });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// for updating existing footer links
router.post("/admin/updateFooterLink", async (req, res) => {
  try {
    const { id, type, name, link } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const result = await footerModel.updateOne(
      {
        _id: id,
      },
      {
        type,
        name,
        link,
      }
    );
    res.status(200).json({
      message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// For footer
router.get("/getallLinks/:type", async (req, res) => {
  try {
    console.log(req.params.type);
    const data = await footerModel.find({
      type: req.params.type,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

// -------------------------------------for menu----------------------------------------

// for uploading Menu links
router.post("/admin/addMenuLink", async (req, res) => {
  try {
    const { name, link } = req.body;
    if (!name || !link) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const insertMenu = new MenuModel({
      name: name,
      link: link,
    });
    const insertNewMenuLink = insertMenu.save();
    res.status(200).json({ message: "New Menu Added!" });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// for removing footer link
router.post("/admin/removeMenuLink", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const result = await MenuModel.deleteOne({
      _id: id,
    });
    let msg;
    if (result.deletedCount === 1) {
      msg = "Successfully deleted one document.";
    } else {
      msg = "No documents matched the query. Deleted 0 documents.";
    }
    res.status(200).json({ message: msg });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// for updating new menu
router.post("/admin/updateMenu", async (req, res) => {
  try {
    const { id, name, link } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    const result = await MenuModel.updateOne(
      {
        _id: id,
      },
      {
        name,
        link,
      }
    );
    res.status(200).json({
      message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    });
  } catch (e) {
    res.status(999).json({ message: e });
    console.log(e);
  }
});

// get all menus
router.get("/getallMenuLinks", async (req, res) => {
  try {
    const data = await MenuModel.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;
