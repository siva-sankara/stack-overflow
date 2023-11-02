const { openai } = require("../config/chaatBotConfig");
const ChatBotModel = require("../models/ChatBotModel");

module.exports.chatBotInput = async (req, res) => {
  try {
    const { question } = req.body;
   
    const chat = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${question}` }],
      model: "gpt-3.5-turbo",
    });
   console.log(chat, "siva");
    const answer = chat.choices[0].message.content;
    const pair = await ChatBotModel.create({ question, answer });
   console.log(pair);
    res.status(200).json({
        success : true,
        message : "your output",
        answer
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports.chatDelete = async(req, res)=>{
    try {
        await ChatBotModel.deleteMany();
        res.status(200).json({
            success : true,
            message : "Chat was deleted "
        })
    } catch (error) {
        res.status(200).json({
            success : false,
            message : error.message
        })
    }
}