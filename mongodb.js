const mongodb = require("mongodb");

//#region Connect to mongo db
const MongoClient = mongodb.MongoClient;

const connectionurl = "mongodb://127.0.0.1:27017";
const databasename = "taskmanger";

MongoClient.connect(
  connectionurl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Error occur in mongodb ", error);
      return;
    }

    //Create Db connection
    const db = client.db(databasename);

    //#region  insert one data
    db.collection("user").insertOne(
      {
        name: "Sandip Kumar",
        age: 24,
      },
      (error, result) => {
        if (error) {
          console.log("Error occure while inserting document");
          return;
        }

        console.log("Document inserted .. ", result.ops);
      }
    );
    //#endregion
  }
);
//#endregion
