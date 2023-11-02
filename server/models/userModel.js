const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 subscriptionPlan :{
  type:String,
  default : "sai",
 },
 noOfQuestinOfPlan:{
  type :Number,
  default :1
 },
  about: {
    type: String,
  },
  tags: {
    type: [String],
  },
  jionedOn: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
