const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("unable to connect to mongodb server");
    }

    console.log("Connected to the server at port 27017");

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c77f5c8cae2a46ec04a448b')
    // }).toArray().then((docs)=>{
    //     console.log("Todos: ");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch the data", err);
    // });
    // db.close();

    // db.collection('Todos').find().count().then((count) => {
    //     console.log("Todos count: ", count);
    // }, (err) => {
    //     console.log("Unable to fetch the collection", err);
    // });
    db.collection('Users').find({
        name: "Piotr"
    }).toArray().then((docs) => {
        console.log("User: ");
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err)=>{
        console.log("Unable to fetch the data", err);
    })
});