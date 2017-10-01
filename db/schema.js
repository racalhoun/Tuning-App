const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const TunerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: false
    }
})


const CarSchema = new Schema({
    make:{
    type: String,
    required: true
    },
    model:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    engine:{
        type: String,
        required: true
    },
    trans:{
        type: String,
        required: true
    },
    vin:{
        type: String,
        required: false
    }
})
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    stable: [CarSchema]  
});
const UserModel = mongoose.model('users', UserSchema)
const CarStable = mongoose.model('cars', CarSchema)
const TunerModel = mongoose.model('tuner', TunerSchema)
const PackageModel = mongoose.model('package', PackageSchema)

module.exports = {
    UserModel: UserModel,
    CarStable: CarStable,
    TunerModel: TunerModel,
    PackageModel: PackageModel
}