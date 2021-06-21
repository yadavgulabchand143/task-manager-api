require("../src/db/mongoose");
const Task = require("../src/models/task");

//Promise chaining example
//60cb41cf01575a337465bbf2
// Task.findByIdAndDelete("60cb41cf01575a337465bbf2")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Async/Await Example
//60cc2bfaffc11e4e98f07649
const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("60cc2bfaffc11e4e98f07649")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
