const express = require("express");
const pizzas = require ('./models/pizzamodel')

const app=express();
const db = require("./db.js");
const pizzaModels = require('./models/pizzamodel');
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("hello"+ port );
});
app.get("/getPizzas",(req,res)=>{
    Collection.find().then(function(documents){
        console.log(documents);
    
    });

});

const port =process.env.Port || 5000;

app.listen(port,()=> 'server running on port port');