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
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
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
