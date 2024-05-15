    const express = require('express');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const cookieParser = require('cookie-parser');
    const UserModel = require('./models/User');

    const app = express();
    app.use(express.json());
    app.use(cors({
            origin: ["http://localhost:5173"],
            methods: ["GET", "POST"],
            credentials: true
        }
    ));
    app.use(cookieParser());

    mongoose.connect('mongodb://127.0.0.1:27017/mern_auth_db');
    // mongoose.connect('mongodb://localhost:27017/mern_auth_db');

    app.post('/login', (req, res)=> {
        const {email, password} = req.body;
        UserModel.findOne({email})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, (err, response)=>{
                    if(response){
                        const token = jwt.sign({email: user.email, role: user.role},
                            'jwt-secret-key', {expiresIn: '1h'})
                            res.cookie('token', token)
                            return res.json("Successful Login");
                    }else{
                        return res.json("Invalid Password");
                    }
                })
            }else{
                return res.json("No user with provided email found");
            }
        })
    })

    app.post('/register', (req, res) => {
        const {name, email, password} = req.body;
        bcrypt.hash(password, 10)
        .then(hash=>{
            UserModel.create({name, email, password: hash})
            .then(user => res.json("Successssssssssssssss"))
            .catch(err => res.json(err))
        }).catch(err => res.json(err))
    })

    app.listen(3001, ()=>{
        console.log("Server is Runningggggggggggggggggggggggggggggggggggggggggggg."); 
    }) 