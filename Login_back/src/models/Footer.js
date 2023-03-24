const mongoose = require("mongoose");
const footerSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("footer", footerSchema, "footer");
