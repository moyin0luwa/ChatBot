// Here we set up our server
// Importing dependencies
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { json } = require("body-parser")

// To allow parsing on request bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(json())

// Setting up our routes with the base route as /chatbot i.e localhost:3000/chatbot
const cbRoutes = require("./routes/chatbotRoute")
app.use("/chatbot", cbRoutes)

// Bringing in our PORT number from the .env file
require("dotenv").config()
const port = process.env.PORT || 3000

// To intergrate bodyparser and cors(for the frontend)
const cors = require("cors")

// Creating a basic GET request
app.get("/df/chatbot", (req, res) => {
	res.send("ChatBot Server running")
})

// Starting up our server
app.listen(port, () => {
	console.log(`Server listening on PORT ${port}`)
})
