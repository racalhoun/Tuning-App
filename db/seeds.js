require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', function (err){
    console.log(err);
});

db.once('open', function(){
    console.log('db connected baby!');
});
const Schema = require('./schema.js');

const UserModel = Schema.UserModel;
const CarStable = Schema.CarStable;
const TunerModel = Schema.TunerModel;
const PackageModel = Schema.PackageModel;
PackageModel.remove({}, function (err) {
    console.log(err);
});
TunerModel.remove({}, function (err) {
    console.log(err);
});
UserModel.remove({}, function (err) {
    console.log(err);
});
const nedPenny = new UserModel({
    name: 'Ned Penny',
    phoneNumber: 123456789,
    email:'bigolnedp@email.com',
    userName:'nedarifficuss',
    password:'*********',
    stable:[{
        make:'Chevrolet',
        model:'Chevelle',
        year:1968,
        engine: '5.3L',
        trans: '4L60E',
        vin: '1383663b1a'
    }]
    });
const sallyWally = new UserModel({
    name: 'Sally Wally',
    phoneNumber: 123456789,
    email:'swall59@email.com',
    userName:'sallysue',
    password:'*********',
    stable:[{
        make:'Ford',
        model:'F150',
        year:2015,
        engine: '5.4L',
        trans: 'C6',
        vin: '8h7sj789803o2kk334'
    }],    
});
nedPenny.save()
    .then(()=>{
        console.log(`Ned Penny saved`)
    })
    .catch((error)=>{
        console.log(error)
    })
sallyWally.save()
.then(()=>{
    console.log(`Sally Wally saved`)
})
.catch((error)=>{
    console.log(error)
}) 


const jimRivers = new TunerModel({
    name: 'Jim Rivers',
    phoneNumber:8921926273,
    email:'jriv1@email.com',
    location:'Atlanta,GA',
    experience: 'Years and years'
});
const fredMuskie = new TunerModel({
    name:'Fred Muskie',
    phoneNumber: 673892034,
    email: 'fredm1@email.com',
    location: 'Killeen, TX',
    experience:'Years and years'
});
jimRivers.save()
   .then(()=>{
       console.log('Jim Rivers saved')
   })
   .catch((error)=>{
       console.log(error)
   })
fredMuskie.save()
   .then(()=>{
       console.log('Fred Muskie saved')
   })
   .catch((error)=>{
       console.log(error)
   })
   
const stage1 = new PackageModel({
    name: 'Stage 1',
    description:'Speedo Calibration for tire size change. Air bag resets, Speed limiter increases, Skip shift kills.',
    price: 399
});
const stage2 = new PackageModel({
    name: 'Stage 2',
    description: 'On top of what is included in Stage 1, plus; Start up tune for transplants, VATS check, turn off unnessiciary DTCs, fan temp and A/C WOT settings, If using a MAF - slight calibration for basic fuel correction.',
    price: 450
});
const stage3 = new PackageModel({
    name: 'Stage 3',
    description: 'Everything included in Stage 1 & 2, plus: complete tuning of VE tables under drive cycle, transmission shift pattern correction, minor trroubleshooting and repair of defective subsystems that negatively effect ability to completely tune vehicle.',
    price: 700
}); 
stage1.save()
.then(()=>{
    console.log('stage 1 saved')
})
.catch((error)=>{
    console.log(error)
})
stage2.save()
.then(()=>{
    console.log('stage 2 saved')
})
.catch((error)=>{
    console.log(error)
})
stage3.save()
.then(()=>{
    console.log('stage 3 saved')
})
.catch((error)=>{
console.log(error)
})
const users = [nedPenny, sallyWally]
const tuner = [jimRivers, fredMuskie]
const package = [stage1, stage2, stage3]
db.close();