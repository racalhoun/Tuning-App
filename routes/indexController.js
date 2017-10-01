var express = require('express');
var router = express.Router();

/* GET home page. */
//INDEX
router.get('/', (req, res) =>{
  console.log('Welcome Back!')
  res.redirect('/home');
});

module.exports = router;
