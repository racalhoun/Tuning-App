var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const PackageModel = Schema.PackageModel

router.get('/', (req, res)=>{
    PackageModel.find({})
    .then((package)=>{
        res.render('package/index', {
         package:package  
        })
        
    })
})
router.get('/:packageId', (req, res)=>{
const packageId = req.params.packageId
 PackageModel.findById(packageId)
  .then((package)=>{
      res.render('package/show', {
          package:package
      })
  .catch((error)=>{
      console.log(error)
  })    
  })
})






module.exports = router;