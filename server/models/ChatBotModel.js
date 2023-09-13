const mongoose =  require('mongoose')

const promptmodel =  new mongoose.Schema({
    question : {
        type :String,
        required : true
    },
    answer : {
        type :String,
        required : true
    }
})

const ChatBotModel =  mongoose.model('ChatBotModel',promptmodel)
module.exports = ChatBotModel