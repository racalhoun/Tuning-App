var express = require('express');
var router = express.Router();

const Schema = require('../db/schema.js')
const PackageModel = Schema.PackageModel

router.get('/', (req, res)=>{
    PackageModel.find({})
    .then((package)=>{
        res.render('package/show')
        // package:package
    })
})







module.exports = router;