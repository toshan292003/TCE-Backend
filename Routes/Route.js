const express = require("express");
const router = express.Router();
const studentController = require("../Controller/StudentController");
const coursecontroller = require("../Controller/CourseController");

router.post("/register", studentController.createStudent);
router.post("/login", studentController.loginstudent);

router.post("/course",coursecontroller.createCourse);

module.exports = router;