    const express = require('express');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const cookieParser = require('cookie-parser');
    const UserModel = require('./models/User');

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    mongoose.connect('mongodb://127.0.0.1:27017/mern_auth_db');
    app.post('/register', (req, res) => {
        const {name, email, password} = req.body;
        bcrypt.hash(password, 10)
        .then(hash=>{
            UserModel.create({name, email, password: hash})
            .then(user => res.json({status : "OK"}))
            .catch(err => res.json(err))
        }).catch(err => res.json(err))
    })

    app.listen(3001, ()=>{
        console.log("Server is Runningggggggggggggggggggggggggggggggggggggggggggg.");
    }) 