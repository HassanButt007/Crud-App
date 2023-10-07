const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    Designation: {
        type: String
    },
});

mongoose.model('Employee', employeeSchema)