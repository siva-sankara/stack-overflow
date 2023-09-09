const express = require('express')
const { postAnswer, deleteAnswer } = require('../controllers/Answers')
const auth = require('../middlewares/auth')

const router = express.Router()

router.patch('/post/:id',auth, postAnswer)

router.patch('/delete/:id', auth , deleteAnswer)


const answerRoutes = router
module.exports =  answerRoutes