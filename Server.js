const express =require('express');
const mongoose = require('mongoose');
const app =express();
require('dotenv').config();
const dbConfig = require('./config/DbConfig')
const Port =process.env.PORT || 5000;
app.listen(Port,()=>{
    console.log(`app is listening on ${Port}`);
})