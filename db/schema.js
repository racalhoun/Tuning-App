const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stage1Schema = new Schema({
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
const Stage2Schema = new Schema({
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
const Stage3Schema = new Schema({
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

/*const CartSchema = new Schema({
    description:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        requred: true
    },
    subtotal:{
        type: Number,
        required: true
    },
    tax:{
        type: Number,
        required: false
    },
    total:{
        type: Number,
        required: true
    }
}) Table this until after MVP is met*/
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
const UserModel = mongoose.model('User', UserSchema)
const CarStable = mongoose.model('Car', CarSchema)

module.exports = {
    UserModel: UserModel,
    CarStable: CarStable
}