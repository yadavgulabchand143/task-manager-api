// CRUD create read update delete
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect database!");
    }
    console.log("Connected successfully.");
    const db = client.db(databaseName);

    // db.collection("user").insertOne(
    //   {
    //     name: "vikram",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log(" Unable to insert user data");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("user").insertMany(
    //   [
    //     {
    //       name: "test",
    //       age: 10,
    //     },
    //     {
    //       name: "kkkk",
    //       age: 11,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(" Unable to insert user datas");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "pot plants",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log(" Unable to insert task datas");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //Quering documents
    // db.collection("user").findOne(
    //   { _id: new ObjectID("60cad9f3fed3b92b801222d4") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log(" Unable to fetch data");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("user")
    //   .find({ age: 29 })
    //   .toArray((error, user) => {
    //     console.log(user);
    //   });
    // db.collection("user")
    //   .find({ age: 29 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, task) => {
    //     console.log(task);
    //   });

    //update
    // const updatePromise = db.collection("user").updateOne(
    //   {
    //     _id: new ObjectID("60cad2415bbdc22d7ca85d8c"),
    //   },
    //   {
    //     $set: {
    //       name: "Aashish",
    //     },
    //   }
    // );
    // // Promises (make it easy to manage async call)
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("user")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("60cad2415bbdc22d7ca85d8c"),
    //     },
    //     {
    //       $set: {
    //         name: "Gulab",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //delete
    db.collection("user")
      .deleteMany({ age: 29 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
