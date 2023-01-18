const menu = require('../controllers/menu');
const express =require('express');

const router =express.Router();

router.post('/rname',menu.getallmenuitems);

module.exports = router;