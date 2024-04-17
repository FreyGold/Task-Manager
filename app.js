const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasksRouter");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
