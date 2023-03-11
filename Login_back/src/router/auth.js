const express = require('express');
const router = express.Router();

require('../db/conn');
const UserModel = require('../models/Users');
const StudModel = require('../models/Stud');

router.get("/", (req, res) => {
    res.send('welcome');
});
router.get("/register", (req, res) => {
    res.send('register');
});
router.get("/un/:s_name", async (req, res,) => {
    try {
        const data = await UserModel.distinct('un_name', { "state": req.params.s_name });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});
router.get("/un/:s_name/:un_name", async (req, res,) => {
    try {
        const data = await UserModel.distinct('dp_name', { "state": req.params.s_name, "un_name": req.params.un_name });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});
router.get("/un/:s_name/:un_name/:dp_name", async (req, res,) => {
    try {
        const data = await UserModel.distinct('sem', { "state": req.params.s_name, "un_name": req.params.un_name, "dp_name": req.params.dp_name });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});

router.get('/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:name/:roll', async (req, res) => {

    try {
        const data = await UserModel.find({ 'name': req.params.name, 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'exam_name': req.params.exam_name, 'year': req.params.year, 'roll': `${req.params.roll}.0`, 'sem': req.params.sem });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});
router.get('/cr/:s_name/:un_name/:dp_name/:year/:sem', async (req, res) => {

    try {
        const data = await UserModel.distinct('exam_name', { 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'year': req.params.year, 'sem': req.params.sem });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});
router.get('/cr/:s_name/:un_name/:dp_name/:sem/:year/1', async (req, res) => {

    try {
        const data = await UserModel.distinct('name', { 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'sem': req.params.sem, 'year': req.params.year });
        res.send(data);

    } catch (e) {
        res.send(e);
    }
});

router.get('/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:roll', async (req, res) => {

    try {
        const data = await UserModel.distinct('name', { 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'exam_name': req.params.exam_name, 'year': req.params.year, 'roll': `${req.params.roll}.0`, 'sem': req.params.sem });
        res.send(data);
        // const data = await UserModel.find({ 'name': 'Ajay', 'state': 'Assam', 'un_name': 'a university', 'dp_name': 'IT', 'exam_name': 'UT-2', 'year': '2022-23', 'roll': '1.0' });
        // res.send(data);

    } catch (e) {
        res.send(e);
    }
});
router.get('/cr/:s_name/:un_name/:dp_name/:exam_name/:year/:sem/:name/dept/hel', async (req, res) => {

    try {
        const data = await UserModel.distinct('roll', { 'name': req.params.name, 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'exam_name': req.params.exam_name, 'year': req.params.year });
        res.send(data);
        // const data = await UserModel.distinct('roll', { 'state': req.params.s_name, 'un_name': req.params.un_name, 'dp_name': req.params.dp_name, 'exam_name': req.params.exam_name, 'year': req.params.year, 'sem': req.params.sem,'name': req.params.name });
        // res.send(data);
        // const data = await UserModel.find({ 'name': 'Ajay', 'state': 'Assam', 'un_name': 'a university', 'dp_name': 'IT', 'exam_name': 'UT-2', 'year': '2022-23', 'name': 'Ajay' });
        // res.send(data);

    } catch (e) {
        res.send(e);
    }
});

router.post('/cr', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "awesome" })
    try {
        const { s_name, dp_name, un_name, sem, year, exam_name, name, roll, mothers_name } = req.body;
        const roll1 = `${roll}.0`;
        if (!exam_name || !name || !roll1 || !s_name || !dp_name || !un_name || !sem || !year || !mothers_name) {
            return res.status(400).json({ error: "Plz filled the data" });
        }
        const userLogin = await UserModel.findOne({ dp_name: dp_name, un_name: un_name, sem: sem, year: year, exam_name: exam_name, name: name, roll: roll1, mothers_name: mothers_name });


        if (userLogin) {
            res.status(999).json({ message: "Result" });
        } else {
            res.status(400).json({ message: "Invalid Credentials" });
        }


    } catch (e) {
        console.log(e);
    }
});



module.exports = router;