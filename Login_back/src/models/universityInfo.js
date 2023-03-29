const mongoose = require("mongoose");
const universityInfoSchema = new mongoose.Schema({
  un_name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  disclaimer: {
    type: String,
    required: true,
  },
});

const UniversityInfoModel = mongoose.model(
  "universityInfo",
  universityInfoSchema
);
module.exports = UniversityInfoModel;
