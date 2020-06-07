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
    // db.collection("user").insertOne(
    //   {
    //     name: "Sandip Kumar",
    //     age: 24,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       console.log("Error occure while inserting document");
    //       return;
    //     }

    //     console.log("Document inserted .. ", result.ops);
    //   }
    // );
    //#endregion

    //#region Insert Many data
    db.collection("user").insertMany(
      [
        {
          name: "vicky",
          age: 61,
        },
        {
          name: "tashi",
          age: 23,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Error occure while iserting data");
        }
        console.log("Data inserted ... ", result.ops);
      }
    );
    //#endregion
  }
);
//#endregion
