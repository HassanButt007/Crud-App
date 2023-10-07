const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://hassan:hassan@cluster0.prqhxtw.mongodb.net/crudOp?retryWrites=true&w=majority", { useNewUrlParser: true}
    , (err) => {
        if (!err){console.log("connection succeeded ")}
        else{console.log("connection poor : " + err)};
    }
    );

    require("./empployee");