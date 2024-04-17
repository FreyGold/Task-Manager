const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "a task must have a title"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Tasks = mongoose.model("Task", TaskSchema);

module.exports = Tasks;
