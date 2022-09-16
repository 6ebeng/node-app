const express = require('express'),
      app = express(),
      port = 6969

app.get('/users', (req,res)=>{
    res.send('Here is respond data')
})

app.post('/users',(req,res)=>{
    
})
