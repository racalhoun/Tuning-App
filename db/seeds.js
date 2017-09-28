require('dotenv').config();

const mongoose = require('mongoose');
const Schema = require('./schema.js');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', function (error){
    console.log(err);
});

db.once('open', function(){
    console.log('db connected baby!')
});

const UserModel = Schema.UserModel;
const CarStable = Schema.CarStable;

const nedPenny = new UserModel({
    name: 'Ned Penny',
    phoneNumber: 123456789,
    email:'bigolnedp@email.com',
    userName:'nedarifficuss',
    password:'*********',
    stable:{
        make:'Chevrolet',
        model:'Chevelle',
        year:1968,
        engine: '5.3L',
        trans: '4L60E',
        vin: '1383663b1a'
    }
    });
    const sallyWally = new UserModel({
        name: 'Sally Wally',
        phoneNumber: 123456789,
        email:'swall59@email.com',
        userName:'sallysue',
        password:'*********',
        stable:{
            make:'Ford',
            model:'F150',
            year:2015,
            engine: '5.4L',
            trans: 'C6',
            vin: '8h7sj789803o2kk334'
        },    
});