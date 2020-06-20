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

    db.collection('users').findOne({name : 'rahul'} , (error , user)=>{
      if(error){
        return console.log("Error came while finding...." , error);
      }
      console.log("Find data ..." , user);
    });

  }
);
//#endregion
