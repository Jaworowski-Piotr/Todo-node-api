const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("unable to connect to mongodb server");
    }

    console.log("Connected to the server at port 27017");
    
    // db.collection('Todos').deleteMany({
    //     text: "Eat lunch"
    // }).then((res)=>{
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Todos').deleteOne({
    //     text: "Eat lunch"
    // }).then((res)=>{
    //     console.log(res);
    // }, (err)=>{
    //     console.log(err)
    // });

    // db.collection("Todos").findOneAndDelete({
    //     text: 'Eat lunch'
    // }).then((res) => {
    //     console.log(res)
    // }, (err) =>{
    //     console.log(err)
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c77d5a9d1263e291435409b")
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }).catch((err) => {
        console.log("Unable to find a note: ", err);
    });
});
