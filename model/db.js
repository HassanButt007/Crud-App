const mongoose = require("mongoose");

mongoose.connect(
    //Wrong DB Link
    "mongodb+srv://hassan:fffaa@cluster0.prqhxtw.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true}
    , (err) => {
        if (!err){console.log("connection succeeded ")}
        else{console.log("connection poor : " + err)};
    }
    );

    require("./empployee");
