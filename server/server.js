let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require("./model/todo.js");
let {User} = require('./model/user.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        console.log("Todo: ");
        console.log(JSON.stringify(doc, undefined, 2));
        res.send(doc);
    }, (err) => {
        console.log("Unable to create todo.");
        console.log(err);
        res.send(err)
    });
});


app.listen(3000, () => {
    console.log("Started on port 3000");
});