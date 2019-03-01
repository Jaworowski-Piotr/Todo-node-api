const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log("unable to connect to mongodb server");
    }

    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Eat lunch'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((res) => {
    //     console.log(JSON.stringify(res, undefined,2))
    // }).catch((err) => {
    //     console.log("Unable to update a document", err)
    // });

    db.collection('Users').findOneAndUpdate({
        name: "Marek"
    }, {
        $set: {
            name: "Piotr"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2))
    }).catch((err) => {
        console.log("Unable to update. ", err)
    });

    db.close();
});