
var express = require('express')//chargement des modules
var mongodb = require('mongodb')
var cors = require('cors');
var app = express()//initialisation des modules
var MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/exppro'
MongoClient.connect(url, function (err, client) { //connection a la bdd
  const db = client.db('exppro')
   if (err) throw err
   db.collection('experiencepro', function(err , collection){ //acces collection
     app.use(cors());
     app.get('/experiencepro' , function(req, res) {  //routes
       collection.find().toArray(function(err, experiencepro){
         if (!err) res.send(experiencepro)
       })
     })
     app.post('/experiencepro' , function (req, res) {
       collection.insert(req.body , function (err, produit){
         if (!err) res.send(produit)
       })
     })
     app.get('/experiencepro/:id' , function(req, res){ //recherche par id
       collection.findone({"_id": new mongodb.ObjectID(req.params.id)} , function(err , experiencepro){
         if (!err) res.send(experiencepro)
       })
     })
   })
})
app.listen(5000)//ecoute du port (affichage)



// creation de la database

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/exppro";                // creation de la database exppro
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("exppro");                                      // connexion a la database exppro
//   dbo.createCollection("experiencepro", function(err, res) {      // creation de la collection experiencepro
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("exppro");                                                            // connexion a la database exppro
// var myobj = { titre: "Futur", date: "Futur :", resume: "Peut être chez vous... " };     // ajout d'un document dans la bdd
//   dbo.collection("experiencepro").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("exppro");
//   var mysort = { name: 1 };
//   dbo.collection("experiencepro").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// DELETE The collection
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {                       // connexion a la database exppro
//   if (err) throw err;
//   var dbo = db.db("exppro");
//   dbo.collection("experiencepro").drop(function(err, delOK) {    //suppresion de le collection experience pro
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });



// DELETE document
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";                                       // url de mongodb
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("exppro");                                                   // connexion a la database exppro
//   var myquery = { titre: 'Futur' };                                            //recuperation du document comportent le titre futur
//   dbo.collection("experiencepro").deleteOne(myquery, function(err, obj) {     //suppresion du document dans le collection experience pro
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });
