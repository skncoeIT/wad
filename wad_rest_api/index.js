const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://aniket:aniket@cluster0.3iam2cc.mongodb.net/wad').then(()=>{
    console.log('db connected successfully');
})

app.post('/login',(req,res)=>{
    
});