const app = require('./app');

// const express = require("express");
// require("./db/mongoose");
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("./models/user");
// const Task = require("./models/task");

// const app = express();
//const port = process.env.PORT || 3000;
const port = process.env.PORT;

// create a router
//const router = new express.Router();

//setup middleware
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("get request are disable");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("site is currently down. check back soon!");
// });

//Parse incoming json to object

// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);

//setup a router
// app.use(router);

// router.get("/test", (req, res) => {
//   res.send("test");
// });

// app.post("/users", async (req, res) => {
//   const user = new User(req.body);
//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.post("/tasks", (req, res) => {
//   console.log(req.body);
//   const task = new Task(req.body);
//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // if (!file.originalname.endsWith(".pdf")) {
//     //   return cb(new Error("please upload a PDF"));
//     // }
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("please upload a Word Documnet"));
//     }

//     cb(undefined, true);
//     // cb(undefined, false);
//   },
// });

// // const errorMiddleware = (req, res, next) => {
// //   throw new Error("From my middleware");
// // };

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({
//       error: error.message,
//     });
//   }
// );

// decrypt password
// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatch);
// };

// myFunction();

//hashing algorithm one way algorithm

// json web token
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };

// myFunction();

// toJSON method
// const pet = {
//   name: "hul",
// };
// pet.toJSON = function () {
//   // console.log(this);
//   // return this;
//   return {};
// };
// console.log(JSON.stringify(pet));

// const main = async () => {
//   const task = await Task.findById("60cdb847a034873128e443f7");
//   await task.populate("owner").execPopulate();
//   console.log(task.owner);

//   const user = await User.findById("60cdb7eea034873128e443f2");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
