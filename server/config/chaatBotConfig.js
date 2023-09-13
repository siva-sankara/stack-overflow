const { default: OpenAI } = require('openai')
require('dotenv').config();

const openai = new OpenAI({
    apiKey : process.env.CHATGPT_KEY,
})

module.exports.openai = openai;