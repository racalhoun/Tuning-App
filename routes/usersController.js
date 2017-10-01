var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const UserModel = Schema.UserModel
/* GET users listing. */
//INDEX route
router.get('/', (req, res,) =>{
  UserModel.find({})
  .then((users)=>{
    res.render('users/show') 
     users:users  
  })
})
//NEW route
router.get('/new', (req, res)=>{
  res.render('users/new')
})
//CREATE route
router.post('/', (req, res)=>{
//console.log('test')
  //const userId = req.params.userId
  const newUser = req.body;
 UserModel.create(newUser)
  .then(()=>{
   res.redirect('/users')
    //return userId.save()
  }) 
  .catch((error)=>{
    console.log('cannot find create')
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
    console.log('cannot find edit')
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
    console.log('update issue')
  })
})
//SHOW
router.get('/:userId', (req, res)=>{
const userId = req.params.userId
 UserModel.findById(userId)
  .then((user)=>{
    res.render('users/show', {
      user: user
    })
  .catch((error)=>{
    console.log('show error')
  })
  })  
})
//DELETE route
router.get('/:userId/delete', (req, res)=>{
const userId = req.params.userId
 UserModel.findByIdAndRemove(userId)
  .then(()=>{
    res.redirect('/')
  })
  .catch((error)=>{
    console.log('delete fail')
  })
})
module.exports = router
























module.exports = router;
