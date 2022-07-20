// Here we define our controller functions
const chatbot = require("../df_chatbot/df_chatbot")

exports.textQuery = async (req, res) => {
	console.log(req.body) // Request sent from the client is displayed on the console
	const { text, userId } = req.body
	// THe resultQuery here is basically the response returned from the detectintent function in the chatbot
	const resultQuery = await chatbot.text_query(text, userId)
	// Fulfillment text is a field of the returned response the indicates the actual response from dialog flow  to the intent
	console.log(resultQuery)
	// Now providing a proper format for the resultQuery
	const resultObj = {
		intentName: resultQuery.intent.displayName,
		userQuery: resultQuery.queryText,
		fulfillmentText: resultQuery.fulfillmentText,
	}
	res.send(resultObj)
}

// All in all The whole process after setting this up is;
// we simply create an intent in the dialog flow GUI and the chat ot replies with the configured response.
