"use strict";

var fs = require("fs");

var mongodb = require("mongodb").MongoClient;

var fastcsv = require("fast-csv");

var url = "mongodb://localhost:27017/";
var stream = fs.createReadStream("./db/baseUsuarios.csv");
var csvData = [];
var csvStream = fastcsv.parse().on("data", function (data) {
  csvData.push({
    id: data[0],
    name: data[1],
    description: data[2],
    createdAt: data[3]
  });
}).on("end", function () {
  csvData.shift();
  mongodb.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err, client) {
    if (err) throw err;
    client.db("dbhackathon").collection("users").insertMany(csvData, function (err, res) {
      if (err) throw err;
      console.log("Inserted: ".concat(res.insertedCount, " rows"));
      client.close();
    });
  });
});
stream.pipe(csvStream);
stream = fs.createReadStream("./db/baseClientesHackaton8Oct.csv");
csvData = [];
csvStream = fastcsv.parse().on("data", function (data) {
  csvData.push({
    id: data[0],
    name: data[1],
    description: data[2],
    createdAt: data[3]
  });
}).on("end", function () {
  csvData.shift();
  mongodb.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function (err, client) {
    if (err) throw err;
    client.db("dbhackathon").collection("customers").insertMany(csvData, function (err, res) {
      if (err) throw err;
      console.log("Inserted: ".concat(res.insertedCount, " rows"));
      client.close();
    });
  });
});
stream.pipe(csvStream);