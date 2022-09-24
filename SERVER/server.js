const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./schema');

const {checkExistingUser, generatePasswordHash} = require("./utility");
const jwt = require('jsonwebtoken');
const multer = require("multer")();
const bcrypt = require("bcryptjs");
const salt=10;
const cors = require('cors')
const app =express();
require('dotenv').config();
app.use(multer.array());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.listen(5007,()=>{
    console.log('server running at 5007 port');
})

mongoose.connect('mongodb://localhost/gym',()=>{
    console.log('connected to DB')
}),
(err)=>console.log(err)

app.post("/", (req, res)=> {
    userModel.find({username: req.body.username}).then((userData)=> {
        
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].username, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    console.log("Invalid Password")
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});




app.post("/signup", async (req, res)=> {
    console.log(req.body);
    if(await checkExistingUser(req.body.username)) {
        res.status(401).send("username exist. Please try with different username");
    } else {
        generatePasswordHash(req.body.password).then((passwordHash)=> {
            userModel.create({name: req.body.name,
                mobile:req.body.mobile,
                Address:req.body.Address,
                Age:req.body.Age,
                username:req.body.username,
                password: passwordHash,
                userType:req.body.userType})
            .then(()=> { 
            res.status(200).send(`${req.body.username} added successfully`); 
            })
            .catch((err)=> {
             console.log(err)
            res.status(401).send(err)
            })
        });
    }  
});
