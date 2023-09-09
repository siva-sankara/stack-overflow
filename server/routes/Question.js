const express = require("express");
const {
  askQuestion,
  getAllQuestion,
  deleteQuestion,
  voteQuestion,
} = require("../controllers/Questions");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/Ask",auth, askQuestion);

router.get("/get", getAllQuestion);

router.delete("/delete/:id",auth, deleteQuestion);

router.patch("/vote/:id",auth, voteQuestion);

const questionRoute = router;
module.exports = questionRoute;
