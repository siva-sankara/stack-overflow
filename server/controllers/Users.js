const mongoose = require("mongoose");
const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    const allUsersDetails = [];
    allUsers.forEach((users) => {
      allUsersDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        jionedOn: users.jionedOn,
      });
    });
    res.status(200).json(allUsersDetails)
  } catch (error) {
    res.status(400).json({message : error.message})
  }
};

const updateProfile =async (req,res)=>{
  const{ id:_id} =  req.params;
  const{name,about, tags}= req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }
  try {
    const updateProfile = await userModel.findByIdAndUpdate( _id , { $set : { 'name' : name  , "about" : about,"tags":tags}},{new : true})
    res.status(200).json(updateProfile)
  } catch (error) {
    res.status(405).json({message :error.message})
  }
}

module.exports = {getAllUsers ,updateProfile};
