// Here we define our controller functions
const chatbot  = require('../df_chatbot/df_chatbot')


exports.textQuery = async (req,res) => {
    console.log(req.body) // Request sent from the client is displayed on the console
    const {text, userId} = req.body
    // THe resultQuery here is basically the response returned from the detectintent function in the chatbot
    const resultQuery = await chatbot.text_query(text, userId)
    console.log(resultQuery)
    res.send('Text_Query')
}


// exports.eventQuery = async (req,res) => {
//     console.log(req)
//     res.send('Event_Query')
// }