const express = require("express");
const tasksController = require("../controllers/tasksController");

const router = express.Router();

router.route("/").post(tasksController.logTask).get(tasksController.getTasks);
router
  .route("/:id")
  .get(tasksController.getTask)
  .delete(tasksController.deleteTask)
  .patch(tasksController.updateTask);

module.exports = router;
