const express = require('express');
const router = express.Router();

require('../db/conn');
const UserModel = require('../models/Users');

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


module.exports = router;
