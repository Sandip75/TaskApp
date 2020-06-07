const mongodb = require("mongodb");

//#region Connect to mongo db 
const MongoClient = mongodb.MongoClient;

const connectionurl = "mongodb://127.0.0.1:27017";
const databasename  = "taskmanger";

MongoClient.connect(
  connectionurl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Error occur in mongodb ", error);
      return;
    }
    console.log("Mongodb connected ");
  }
);
//#endregion
