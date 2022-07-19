// Here we connect the dialogflow with the server
const dialogflow = require('dialogflow')
const { dialogFlowSessionLanguageCode } = require('../config/devkey')
const config = require('../config/devkey')

// sessionClient is the dialogflowclient we need in order to have the rest of the functionality, to create the session client we have to provide our credentials 
// Take note of the wordings use, it is strict, credentials should beused in full not credts, private_key should be used not privateKey
const projectID = config.googleProjectId
const sessionID = config.dialogFlowSessionID
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
}
const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
//What happens is the text and userID sent from a post request by the user is obtained and then passed into the chatbot here

// Connect with df api -> first we create a df_client
// Detect the intent from the text passed in from the request -> intent is detected from the text, Basically it is what the user asks
// filter out
// Send response
const text_query = async (userText, userId) => {
    // Creating a session path for the new session client. We want a unique sessionid for every user(Basically a different path for every user)
    const sessionPath = sessionClient.sessionPath(projectID, sessionID+userId);
    // After creation of the sesion path we create a request object. NB: the format for the request is strict
    request = {
        session : sessionPath,
        queryInput: {
            text: {
                
                text: userText, 
                languageCode: dialogFlowSessionLanguageCode,

            }
        }
    }

    // Then to detect the intent from the request, and then send a response to the controller
    try {
        const response = await sessionClient.detectIntent(request)
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}


module.exports = {
    text_query
}