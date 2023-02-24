const mongoose = require('mongoose');
const StudSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    un_name: {
        type: String,
        required: true,
    },
    dp_name: {
        type: String,
        required: true,
    },
    sem: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    exam_name: {
        type: String,
        required: true,
    },
    sub1_name: {
        type: String,
        required: true,
    },
    sub2_name: {
        type: String,
        required: true,
    },
    sub3_name: {
        type: String,
        required: true,
    },
    sub4_name: {
        type: String,
        required: true,
    },
    sub5_name: {
        type: String,
        required: true,
    },
    sub6_name: {
        type: String,
        required: true,
    },
    sub1_marks: {
        type: String,
        required: true,
    },
    sub2_marks: {
        type: String,
        required: true,
    },
    sub3_marks: {
        type: String,
        required: true,
    },
    sub4_marks: {
        type: String,
        required: true,
    },
    sub5_marks: {
        type: String,
        required: true,
    },
    sub6_marks: {
        type: String,
        required: true,
    },
    Total: {
        type: String,
        required: true,
    }
});

// const UserModel = mongoose.model("university", UserSchema);
// module.exports = UserModel;

/**
* Paste one or more documents here
*/
// [
// {"state" : "Goa", "un_name" : "a university", "dp_name" : "IT","sem": "II","name" : "Tanmay", "roll" : "1", "year" : "2022-23","exam_name": "UT-1", },
//     {"state" : "Goa", "un_name" : "a university", "dp_name" : "IT","sem": "II","name" : "Ajay", "roll" : "2", "year" : "2022-23","exam_name": "UT-1" }
//   ]


const StudModel = mongoose.model("university", StudSchema);
module.exports = StudModel;