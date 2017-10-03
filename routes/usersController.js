var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const UserModel = Schema.UserModel
/* GET users listing. */
//INDEX route
router.get('/', (req, res) =>{
  UserModel.find({})
   .then((users)=>{
    console.log(users) 
    res.render('users/index', {
      users:users  
    })   
  })
})
//NEW route
router.get('/new', (req, res)=>{
  res.render('users/new')
})
//CREATE route
router.post('/', (req, res)=>{
   const newUser = req.body;
 UserModel.create(newUser)
  .then((user)=>{
   res.redirect(`/users/${user._id}`)
  }) 
  .catch((error)=>{
    console.log(error)
  })
})
//EDIT
router.get('/:userId/edit', (req, res)=>{
console.log('test edit')
const userId = req.params.userId
 UserModel.findById(userId)
  .then((user)=>{
   res.render('users/edit', {
     user:user
   })
  })
  .catch((error)=>{
    console.log(error)
  })
})
//UPDATE
router.put('/:userId', (req, res)=>{
const userId = req.params.userId
const updatedUser = req.body
 UserModel.findByIdAndUpdate(userId, updatedUser, {new: true})   
  .then(()=>{
    res.redirect(`/users/${userId}`)
  })
  .catch((error)=>{
    console.log(error)
  })
})
//SHOW
router.get('/:userId', (req, res)=>{
const userId = req.params.userId
 UserModel.findById(userId)
  .then((user)=>{
    res.render('users/show', {
      user:user
    })
  .catch((error)=>{
    console.log(error)
  })
  })  
})
//DELETE route
router.get('/:userId/delete', (req, res)=>{
const userId = req.params.userId
 UserModel.findByIdAndRemove(userId)
  .then(()=>{
    res.redirect('/home')
  })
  .catch((error)=>{
    console.log(error)
  })
})
module.exports = router
























module.exports = router;
