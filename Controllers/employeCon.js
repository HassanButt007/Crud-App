// const e = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get("/", (req, res) => {
    res.render("employee/addoredit", {
        viewTitle: 'Insert Employee Data'
    });
});

router.post("/", (req, res) => {
    if(req.body._id == ""){
        inserRecord(req, res);
    }
    else{
        UpdateRecord(req, res);
    }
});


function inserRecord(req, res){
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.Designation = req.body.Designation;
    employee.save((err, doc) => {
        if(!err)
            res.redirect('employee/list');
        else{

            console.log("Error during submit form" + err);
        }
    })
}

function UpdateRecord(req, res){
    Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=> {
        if(!err){
            res.redirect("/employee/list");
        }
        else{
           console.log("This the error" + err);
        }
    });
}


router.get("/list", (req, res) => {
    //res.json('from list');
    Employee.find( (err, docs) => {
        if(!err){
            res.render('employee/list', {
                list: docs
            });
        }
        else{
            console.log("this is an error" + err);
        }
    }).lean()

});


router.get("/:id", (req, res) =>{
    Employee.findById(req.params.id , (err, docs) => {
        if(!err){
            res.render("employee/addoredit", {
                viewTitle: " Update Employee",
                employee: docs
            });
        }
    }).lean()
})
router.delete("/delete:id", (req, res) =>{
    Employee.findByIdAndRemove(req.params.id , (err, docs) => {
        if(!err){
            res.redirect("employee/list");
        }
    }).lean()
})

module.exports = router; 