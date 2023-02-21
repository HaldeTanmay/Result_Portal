const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
    console.log("yes");
}).catch((e) => {
    console.log(e);
});