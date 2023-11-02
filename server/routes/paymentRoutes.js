const mongoose = require("mongoose");
const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const userModel = require("../models/userModel");

router.post("/pay", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };
    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

router.post ("/updateSubscription/:id", async (req, res) => {
    const { id: _id } = req.params;
    try{
      const {subscriptionPlan ,noOfQuestion} = req.body;
      const userId = new mongoose.Types.ObjectId(_id);
      console.log(userId, subscriptionPlan ,noOfQuestion);
      const updateUser = await userModel.findByIdAndUpdate(userId , {
        subscriptionPlan : subscriptionPlan,
        noOfQuestinOfPlan : noOfQuestion
      }, {new : true});
      
      console.log(updateUser);
      return res.status(200).json({
        success : true,
        updateUser
      })

    }catch(error){
      console.log("erro is ", error.message)
      res.status(500).json({
        success : false,
        message : error.message
      })
    }
});

const paymentRoutes = router;
module.exports = paymentRoutes;
