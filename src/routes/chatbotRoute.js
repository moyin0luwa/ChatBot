// Here the routes are configured. Note, the route used in the app.use() of the server will be the root route, the routes here will be the additions
// i.e app.use has the route as /chatbot to access the controller function here, the route will ne /chatbot/text_query
const router = require('express').Router()
const controller = require('../controller/chatbotController')

router
.get('/text_query', controller.textQuery)
.post('/event_query', controller.textQuery)

module.exports = router