const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
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

const MenuModel = mongoose.model("menu", menuSchema);
module.exports = MenuModel;
