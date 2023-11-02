const express = require("express");
const { signUp, logIn } = require("../controllers/auth");
const {getAllUsers ,updateProfile, updateProfileImage, updateSubScription} = require("../controllers/Users");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/signup",signUp)
router.post("/login", logIn)

router.get('/getAllUsers',getAllUsers) 

router.patch('/update/:id',auth,updateProfile)

router.patch('/updateSubscription/:id', auth, updateSubScription)

const userRoutes = router;
module.exports = userRoutes;
 