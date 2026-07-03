const express = require('express')
const app=express()
const PORT=3002; // backend runs at this port

//web server :
app.use(express.static("frontend"))

app.listen(PORT,function(){
    console.log("succesfully running at http://localhost:"+PORT)
})