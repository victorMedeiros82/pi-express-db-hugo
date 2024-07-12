var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const data = {
        title: 'Sobre'
    }
    res.render('about',data);
});
module.exports = router;