const { MongoClient, ObjectID } = require("mongodb");

//#region Connect to mongo db
const connectionurl = "mongodb://127.0.0.1:27017";
const databasename = "taskmanger";

const id = new ObjectID();
console.log("This is ID ..", id);
console.log("This is object id time :: ", id.getTimestamp());

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

    db.collection("User").insertOne(
      {
        _id: id,
        name: "Sandip Kumar",
        age: 23,
      },
      (error, result) => {
        if (error) {
          console.log("Error occure while inserting document");
          return;
        }
        console.log("Document inserted ...", result.ops);
      }
    );
  }
);
//#endregion
