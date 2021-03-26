const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
const app = express()
require('./db/conn')
// const User = require('./models/userSchema')
app.use(express.json())
app.use(require('./router/auth'))
// it grabs every functionality of express



const PORT = process.env.PORT;



// middlewares
// const  middleware = (req,res,next)=>
// {
//     console.log("hello middleware")
//     next();
// }
// middleware();

// provide routes

// app.get('/',(req,res)=>
// {
//     res.send(`hello world from server - dash`)
// });
// app.get('/about',middleware,(req,res)=>
// {
//     res.send(`hello world from server-about`)
// })
app.get('/contact',(req,res)=>
{
    res.send(`hello world from server-contact`)
})
app.get('/signin',(req,res)=>
{
    res.send(`hello world from server-signin`)
})
app.get('/signup',(req,res)=>
{
    res.send(`hello world from server-signup`)
})

app.listen(PORT,()=>
{
    console.log(`server is running at port ${PORT}`)
})