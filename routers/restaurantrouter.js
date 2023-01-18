const express = require('express');
const rest = require('../controllers/REATAURANT')
const router = express.Router();




router.post('',rest.listofrestaurants);
router.post('/city',rest.listonlycityid);
router.post('/details/rname',rest.listonlyname);
router.get('/list',rest.listitems);
router.post('/filter/:pageNo',rest.filter)





module.exports = router;