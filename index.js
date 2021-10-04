const express = require('express')
const app = express()

app.get('/screen', function(req,res){
    res.sendFile(__dirname + '\\screen.html')
})

app.listen(4000)
