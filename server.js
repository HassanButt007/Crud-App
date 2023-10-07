require("./model/db");
const emplyCon = require('./Controllers/employeCon')
const express = require('express');
const path = require('path');
//const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', engine({ extname: 'hbs', defaultLayout: 'mainLayouts', layoutsDir: __dirname + '/views/layouts/' }));
app.set("view engine", 'hbs');

app.listen(4001, () => {
    console.log("Server Created");
});

app.use('/employee', emplyCon);