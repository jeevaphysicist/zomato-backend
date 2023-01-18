const express =require('express');
const location =require('../controllers/location');

const router =express.Router();

router.post('/',location.listoflocations);





module.exports = router ;