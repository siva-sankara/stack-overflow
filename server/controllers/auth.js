
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// require('dotenv').config()

const userModel = require("../models/userModel");

module.exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.status(404).json({
        success: false,
        message: "User already Exist.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    const token =  jwt.sign({email : newUser.email , id: newUser._id },process.env.JWT_SECRET,{expiresIn : '1h'})
    res.status(200).json({ result: newUser, token })
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};

module.exports.logIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await userModel.findOne({ email });
        if(!userExist){
            res.status(404).json({
                success: false,
                message: "User don't Existed - Sign Up.",
              });
        }
        const isPassword =  await bcrypt.compare(password , userExist.password)
        if(!isPassword)
        {
            res.status(404).json({
                success: false,
                message: "Invalid credientials",
              });
        }
        const token =  jwt.sign({email : userExist.email , id: userExist._id },process.env.JWT_SECRET,{expiresIn : '1h'})
        
        res.status(200).json({ result: userExist, token })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "login failed",
          });
    }
};
