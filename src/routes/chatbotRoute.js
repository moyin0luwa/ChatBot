const router = require('express').Router()
const controller = require('../controller/chatbotController')

router
.get('/text_query', controller.textQuery)
.post('/event_query', controller.textQuery)

module.exports = router