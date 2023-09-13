const express = require('express');
const auth = require('../middlewares/auth');
const { chatBotInput, chatDelete } = require('../controllers/chatBotController');
const chatBotRouter = express.Router();

chatBotRouter.post('/chatInput',auth,chatBotInput)

chatBotRouter.get('/chatDelete',auth,chatDelete)

module.exports  = chatBotRouter