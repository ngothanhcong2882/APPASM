const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.end("I love you 5000")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT)
console.log('running...')