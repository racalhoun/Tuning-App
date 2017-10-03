var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const TunerModel = Schema.TunerModel
// INDEX
router.get('/', (req, res) =>{
   TunerModel.find({})
   .then((tuner)=>{
       res.render('tuner/index', {
         tuner:tuner
   })
  }) 
 })
//NEW
router.get('/new', (req, res)=>{
  res.render('tuner/new') 
})  
//CREATE
router.post('/', (req, res)=>{
  const newTuner = req.body;
TunerModel.create(newTuner)
  .then((tuner) =>{
  res.redirect(`/tuner/${tuner._id}`) 
  })  
  .catch((error)=>{
    console.log(error)
  })
})
//EDIT
router.get('/:tunerId/edit', (req, res)=>{
console.log('edit issue')
  const tunerId = req.params.tunerId
 TunerModel.findById(tunerId)
  .then((tuner)=>{
   res.render('tuner/edit', {
     tuner:tuner
   })
  })
  .catch((error)=>{
    console.log(error)
 })
})
//UPDATE
router.put('/:tunerId', (req, res)=>{
console.log('update issue')
  const tunerId = req.params.userId
const updatedTuner = req.body
TunerModel.findByIdAndUpdate(userId, updatedTuner, {new: true})
 .then(()=>{
   res.redirect(`/tuner/${tunerId}`)
}) 
 .catch((error)=>{
   console.log(error)
 }) 
})
//SHOW
router.get('/:tunerId', (req, res)=>{
console.log('show problem')  
  const tunerId = req.params.tunerId
 TunerModel.findById(tunerId)
  .then((tuner)=>{
    res.render('tuner/show', {
      tuner:tuner
    })
  .catch((error)=>{
    console.log(error)
  })
  })
})
//DELETE
router.get('/:tunerId/delete', (req, res)=>{
const tunerId = req.params.tunerId
 TunerModel.findByIdAndRemove(tunerId)
  .then(()=>{
    res.redirect('/home')
  })
  .catch((error)=>{
    console.log(error)
  })
})







  module.exports = router;