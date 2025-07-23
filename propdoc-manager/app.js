const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get("/",(req,res)=>{
    res.render('login',{title:'Login'});
});

app.get("/",(req,res)=>{
    res.render('dashboard',{title:"Dashboard"});
});

app.listen(3000,()=>{
    console.log("Server Running");
});