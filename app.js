const express = require("express");
const app = express();
const tasksRouter = require("./routers/tasksRouter");
const notFound = require("./middleware/notFound");
// const globalHandler = require("./middleware/globalErrorHandler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
// app.use(globalHandler);
module.exports = app;
