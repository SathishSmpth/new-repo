var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.getAllUsers);

router.post("/", userController.signUp);

router.get("/:id", userController.getUser);

router.put("/update/:id", userController.updateMe);

router.delete("/delete/:id", userController.deleteMe);

module.exports = router;
