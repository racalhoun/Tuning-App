var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const TunerModel = Schema.TunerModel

router.get('/', (req, res) =>{
   console.log('incoming business')
   TunerModel.find({})
   .then((tuner)=>{
       res.render('tuner/show');
   })
    
 });
  









  module.exports = router;