const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(url, function(err, client) {
    console.log('Connected!');
    client.close();

    // database Name
    // const dbName = 'myproject';
    // const db = client.db(dbName);

    //new user
    //var name = 'user' + Math.floor(Math.random()*1000);
    //var email = name + '@mit.edu';

    //insert into customer table
    //var collection = db.collection('customers');
    //var doc = {name, email};
    //collection.insertOne(doc, {w:1}, function(err, result) {
        //console.log('Document insert');
    //});
});