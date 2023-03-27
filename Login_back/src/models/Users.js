const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  state: {
    type: String,
    required: false,
  },
  un_name: {
    type: String,
    required: false,
  },
  dp_name: {
    type: String,
    required: false,
  },
  sem: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  roll: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  exam_name: {
    type: String,
    required: false,
  },
  sub1_name: {
    type: String,
    required: false,
  },
  sub2_name: {
    type: String,
    required: false,
  },
  sub3_name: {
    type: String,
    required: false,
  },
  sub4_name: {
    type: String,
    required: false,
  },
  sub5_name: {
    type: String,
    required: false,
  },
  sub6_name: {
    type: String,
    required: false,
  },
  sub1_marks: {
    type: String,
    required: false,
  },
  sub2_marks: {
    type: String,
    required: false,
  },
  sub3_marks: {
    type: String,
    required: false,
  },
  sub4_marks: {
    type: String,
    required: false,
  },
  sub5_marks: {
    type: String,
    required: false,
  },
  sub6_marks: {
    type: String,
    required: false,
  },
  Total: {
    type: String,
    required: false,
  },
  result: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  disclaimer: {
    type: String,
    required: false,
  },
  Ad: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

const un_logo_Schema = new mongoose.Schema({
  state: {
    type: String,
    required: false,
  },
  un_name: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  disclaimer: {
    type: String,
    required: false,
  },
});

const AdSchema = new mongoose.Schema({
  Ad: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

// state: {
//     type: String,
//     required: false,
// },
// un_name: {
//     type: String,
//     required: false,
// },
// dp_name: {
//     type: String,
//     required: false,
// },
// sem: {
//     type: String,
//     required: false,
// }
// });

// const UserModel = mongoose.model("university", UserSchema);
// module.exports = UserModel;

/**
 * Paste one or more documents here
 */
// [
//     {"state" : "Goa", "un_name" : "a university","dp_name" : "CS", "sem": "I" },
//     {"state" : "Goa", "un_name" : "a university", "dp_name" : "IT","sem": "II" },
//     {"state" : "Goa", "un_name" : "b university", "dp_name" : "EXTC","sem": "III" },
//     {"state" : "Goa", "un_name" : "b university","dp_name" : "IT", "sem": "IV" },
//     {"state" : "Goa", "un_name" : "c university", "dp_name" : "ELEC", "sem": "V" },
//     {"state" : "Bihar", "un_name" : "a university","dp_name" : "CS", "sem": "II" }
//   ]

// const un_logo_model = mongoose.model("users", un_logo_Schema);
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;

// const UserModel = mongoose.model("users", UserSchema);
// module.exports = UserModel;
