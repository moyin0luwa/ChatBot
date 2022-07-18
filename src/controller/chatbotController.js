// Here we define our controller functions

exports.textQuery = async (req,res) => {
    console.log(req) // GET Request sent from the client is displayed on the console
    res.send('Text_Query')
}


exports.eventQuery = async (req,res) => {
    console.log(req)
    res.send('Event_Query')
}