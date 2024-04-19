const Tasks = require("../models/tasksModel");

//
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(
      // (err) => next(err)
      res.status(400).json({
        status: "fail",
        message: { err },
      })
    );
  };
};

//// we have 4 operations (CRUD)

// POST 1) log the required Task
exports.logTask = catchAsync(async (req, res, next) => {
  const task = await Tasks.create({
    name: req.body.name,
  });
  res.status(201).json({ task });
});

// DELETE 2) delete specific task
exports.deleteTask = catchAsync(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskID });
  res.status(200).json({ task });
});

// PATCH 3) update specific task
exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return res.status(404).json({
      status: "fail",
      message: "no task with this id",
    });
  res.status(200).json({ task });
});
// GET 4) get the info of a specific task
exports.getTask = catchAsync(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task)
    return res.status(404).json({
      status: "fail",
      message: "no task with this id",
    });
  res.status(200).json({ task });
});

// Get ALL tasks

exports.getTasks = catchAsync(async (req, res, next) => {
  const tasks = await Tasks.find({});
  res.status(200).json({ tasks });
});
