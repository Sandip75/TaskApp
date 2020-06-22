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

    db.collection('users').updateOne({
      _id : new ObjectID('5eedfb99d35c7b6af6c3f9bd')
    },{
      $set:{
        name : 'ram kumar'
      }
    }).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    })
  }

);
//#endregion
