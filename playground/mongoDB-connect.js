const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("unable to connect to mongodb server");
    }

    //     console.log("Connected  to MongoDB server");
    // // db.collection('Todos').insertOne({
    // //     text: "Somethings to  do",
    // //     completed: false
    // // },(err, results) => {
    // //     if(err){
    // //         return console.log("Unable to insert todo", err);
    // //     }

    // //     console.log(JSON.stringify(results.ops, undefined,2));
    // // });
    // db.collection('Users').insertOne({
    //     name: "Marek",
    //     age: 23,
    //     location: "Warszawa"
    // }, (err, results) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err)
    //     }
    //     console.log(JSON.stringify(results.ops,undefined, 2));
    // });

    db.close();
});