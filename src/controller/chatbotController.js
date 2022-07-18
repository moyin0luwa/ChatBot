

exports.textQuery = async (req,res) => {
    console.log(req)
    res.send('Text_Query')
}


exports.eventQuery = async (req,res) => {
    console.log(req)
    res.send('Event_Query')
}