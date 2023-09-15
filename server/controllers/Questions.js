const { mongoose } = require("mongoose");
const Question = require("../models/Question");

const askQuestion = async (req, res) => {
  
  const postQuestionData = req.body;
  const userId =  req.body.userId
  const postQuestion = new Question({ ...postQuestionData, userId : userId });
  try {
    await postQuestion.save();
    res.status(200).json("posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("Couldn't post a new question");
  }
}
const getAllQuestion = async (req, res) => {
  try {
    const questionList = await Question.find().sort({ askedOn: -1 });
    res.status(200).json(questionList);
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).send("question unavailable...");
    }
    await Question.findByIdAndDelete(_id);
    res.status(200).json({ message: "successfully deleted question" });
  } catch (error) {
    res.status(400).json({ message: "error deleted question" });
  }
};

const voteQuestion = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { value, userId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).send("question unavailable...");
    }
    const question = await Question.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );
    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (upIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Question.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully" });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};

module.exports = {
  askQuestion,
  getAllQuestion,
  deleteQuestion,
  voteQuestion,
};
