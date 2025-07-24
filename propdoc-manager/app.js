

const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get("/",(req,res)=>{
    res.render('dashboard',{title:'Login'});
});

app.get("/dashboard",(req,res)=>{
    res.render('dashboard',{title:"Dashboard"});
});

app.listen(3000,()=>{
    console.log("Server Running");
});