const express = require("express");
const router = express.Router();

const users = require("../controllers/userController");

router.post("/", users.create);
router.post("/login", users.login);
router.get("/", users.findAll);
router.get("/:userId", users.findOne);
router.put("/:userId", users.update);
router.delete("/:userId", users.delete);
router.delete("/", users.deleteAll);

module.exports = router;
