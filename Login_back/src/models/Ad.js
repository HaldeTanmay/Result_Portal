const mongoose = require("mongoose");
const AdSchema = mongoose.Schema({
    Ad: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("ad", AdSchema, "ad");
