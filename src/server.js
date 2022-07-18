// Here we set up our server
// Importing dependencies
const express = require('express')
const app = express()

const cbRoutes = require('./routes/chatbotRoute')
app.use("/chatbot", cbRoutes)

// Bringing in our PORT number from the .env file
require('dotenv').config()
const port = process.env.PORT || 3000

// To allow parsing on request bodies
const { json } = require("express");
app.use(json());

// To intergrate bodyparser and cors(for the frontend)
const bodyParser = require('body-parser')
const cors = require('cors')

// Creating a basic GET request
app.get("/df/chatbot", (req, res) => {
	res.send("ChatBot Server running");
});

// Starting up our server
app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`)
})
