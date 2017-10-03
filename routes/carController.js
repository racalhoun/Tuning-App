var express = require('express');
var router = express.Router({mergeParams: true});

const Schema = require('../db/schema.js');
const CarStable = Schema.CarStable
/* GET users listing. */
//INDEX
router.get('/',(req, res) =>{
 CarStable.find({})
  .then((user)=>{
    res.render('cars/index')
      user:user
    })  
  .catch((error)=>{
    console.log(error)
  })
 })
//NEW route- tying the new car to the user id
router.get('/new', (req,res)=>{
const userId = req.params.userId
 res.render('cars/new')
  userId: userId
})
//CREATE
router.post('/', (req, res)=>{
const userId = req.params.userId
const newCar = request.body
 UserModel.findById(userId)
  .then((user)=>{
    user.cars.push(stable)
    return user.save()
  })  
  .then((user)=>{
    res.redirect(`users/${userId}/stable`)
  })
  .catch((error)=>{
    console.log('creation issue')
 })
})
//EDIT
router.get('/:carId/edit', (req, res)=>{
const userId = req.params.userId
const carId = req.params.carId
 UserModel.findById(userId)
  .then((user)=>{
    const car = user.stable.id(carId)
    res.render('cars/edit', {
      userId: userId,
      car: car
    })

  })
  .catch((error)=>{
    console.log('edit issue')
  })
})
//UPDATE
router.put('/:carId', (req, res)=>{
const userId = req.params.userId
const carId = req.params.carId
const updatedCar = req.body
 UserModel.findById(userId)
  .then((user)=>{
    const car = user.stable.id(carId)
    car.make = updatedCar.make
    car.model = updatedCar.model
    car.year = updatedCar.year
    car.engine = updatedCar.trans
    car.vin = updatedCar.vin
    return user.save()
  })  
 .then(()=>{
   res.redirect(`/users/${userId}/cars/${cardId}`)
 })
})
//SHOW
router.get('/:carId', (req, res)=>{
const userId = req.params.userId
const carId = req.params.cardId
 UserModel.findById(userId)
  .then((user)=>{
    const car = user.stable.id(carId)
    res.render('cars/show', {
      userId: userId,
      car: car
    })
  })
 .catch((error)=>{
   console.log('show route issue')
 })
})
//DLETE
router.get('/:car/delete', (req, res)=>{
const userId = req.params.userId
const carId = req.params.cardId
 UserModel.findById(userId)
  .then((user)=>{
    const car = user.stable.id(carId).remove()
    return user.save()
  })
  .then(()=>{
    response.redirect(`/users/${userId}/cars`)
  })
})





 module.exports = router;
