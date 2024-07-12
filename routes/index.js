var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
  const now=new Date()
  const data = {
    title: 'Express',
    name: 'Victor',
    data: now.toLocaleDateString('pt-BR', options)
  }
  res.render('index', data);
});
module.exports = router;
