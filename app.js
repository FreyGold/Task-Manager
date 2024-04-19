const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasksRouter");
const notFound = require("./middleware/notFound");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
module.exports = app;
