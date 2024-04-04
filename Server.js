const express =require('express');
const mongoose = require('mongoose');
const app =express();
require('dotenv').config();
const dbConfig = require('./config/DbConfig')
const portfolio = require('./routes/portfolioRoutes');
app.use(express.json());
app.use('/api/portfolio',portfolio)
const Port =process.env.PORT || 5000;
const path = require("path");
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req,res)=>{res.sendFile(path.join(__dirname,"client/build/index.html"))});
}
app.listen(Port,()=>{
    console.log(`app is listening on ${Port}`);
})