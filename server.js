// stepl: create a folder
//step2:  move into that folder
//step3: npm init -Y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server. js


//server Instantiate
const express=require('express')
const app = express()

// use to parse req.body in express -> PUT & POST
const bodyParser = require('body-parser');

// specifically parse JSON data and add to the request.body obj
app.use(bodyParser.json())


// activate server on port 3000
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})

// Routes
app.get('/',(request,response)=>{
    response.send("Hello jee Kaise hai aap sabb");
})



app.post('/api/cars',(req,res)=>{
    const {name ,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted successfully"); 
})



// DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mydb',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(()=>{console.log("Connection successful to connect Mongo")})
.catch((error)=>{console.log("Recieved an error in connect to db")});