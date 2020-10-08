const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");

let url = "mongodb://localhost:27017/";
let stream = fs.createReadStream("./db/baseUsuarios.csv");
let csvData = [];
let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push({
            id: data[0],
            name: data[1],
            description: data[2],
            createdAt: data[3]
        });
    })
    .on("end", function () {
        csvData.shift();
        mongodb.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err, client) => {
                if (err) throw err;

                client
                    .db("dbhackathon")
                    .collection("users")
                    .insertMany(csvData, (err, res) => {
                        if (err) throw err;
                        console.log(`Inserted: ${res.insertedCount} rows`);
                        client.close();
                    });
            }
        );
    });
stream.pipe(csvStream);

stream = fs.createReadStream("./db/baseClientesHackaton8Oct.csv");
csvData = [];
csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push({
            id: data[0],
            name: data[1],
            description: data[2],
            createdAt: data[3]
        });
    })
    .on("end", function () {
        csvData.shift();
        mongodb.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err, client) => {
                if (err) throw err;

                client
                    .db("dbhackathon")
                    .collection("customers")
                    .insertMany(csvData, (err, res) => {
                        if (err) throw err;
                        console.log(`Inserted: ${res.insertedCount} rows`);
                        client.close();
                    });
            }
        );
    });
stream.pipe(csvStream);