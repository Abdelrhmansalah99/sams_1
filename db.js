
const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://abdelrhmanx99:Darwish66@sams1.mozcggf.mongodb.net/sams1'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=> {
    console.log('mongo db connection successfull');
})
db.on('error', ()=> {
    console.log('db connection failed');
})
module.exports =mongoose