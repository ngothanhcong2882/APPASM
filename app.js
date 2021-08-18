const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.end("I love youuuu")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT)
console.log('running...')