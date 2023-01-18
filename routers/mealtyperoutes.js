const express =require('express');
const mealtyperoutes =require('../controllers/mealtype');
const router = express.Router();

router.post('/',mealtyperoutes.listofmealtypes);





module.exports =router;