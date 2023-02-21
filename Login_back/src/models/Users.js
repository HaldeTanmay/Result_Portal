const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
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
    }
});

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


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;