const express = require('express')

const app=express();
app.use(express.json());

app.use(express.static('public'));

// app.get('/',()=>{

// })

app.listen(3000,()=>{
    console.log('app listening on 3000')
})