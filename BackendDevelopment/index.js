console.log(`Chai Aur Backend and Deployment!`);
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send(`Hello World, This is my backend application!`);
});

app.get('/home',(req,res)=>{
    res.send(`Welcome to Home Page!`);
});

app.get('/login',(req,res)=>{
    res.send(`This is Login Page! you need to login before accessing other pages!`);
});

app.get('/chai',(req,res)=>{
    res.send('<h1>I am learning Backend from chai aur code.</h1>')
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});