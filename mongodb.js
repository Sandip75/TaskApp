const { MongoClient, ObjectID } = require("mongodb");

//#region Connect to mongo db
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

    db.collection("users")
      .find({ name: "vicky" })
      .toArray((error, users) => {
        if (error) {
          return console.log(error);
        }
        console.log(users);
      });

    db.collection("users")
      .find({ name: "vicky" })
      .count((error, users) => {
        if (error) {
          return console.log(error);
        }
        console.log(users);
      });
  }
);
//#endregion
