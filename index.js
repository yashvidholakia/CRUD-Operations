const express = require('express');
const app = express();
const fs = require('fs');
const {connectMongoDb}=require("./connection")
const {logReqRes}=require('./middlewares')
const userRouter=require('./routes/user') 
const PORT = 7000;

//connection
connectMongoDb('mongodb://127.0.0.1:27017/App_2')


//Middleware-Plugin
app.use(express.json())
//app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"))
//Routes
app.use('/api/user',userRouter)
app.listen(PORT, () => {
    console.log(`Server listening to port no ${PORT}`)
})