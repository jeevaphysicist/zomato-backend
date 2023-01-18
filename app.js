const express = require('express');

const bodyparser = require('body-parser');

const cors = require('cors');
 
const mealtyperoutes =require('./routers/mealtyperoutes');
const rout =require('./routers/restaurantrouter');
const locationroutes =require('./routers/locationroutes');
const menuroutes =require('./routers/menuroutes');
const paymentroutes = require('./routers/paymentroutes');
const userroutes = require('./routers/userloginroutes');

const mongoose =require('mongoose');

const app =express();
const PORT = process.env.PORT || 8080;
// const DBString ="mongodb://localhost:27017/zomato";
const DBString ="mongodb+srv://devil:2001@clustor1.mblkznx.mongodb.net/zomato44";
mongoose.connect(DBString,()=>console.log("database is connected successfully"),e=>console.log("error in connecting database",e));


app.use(cors());


app.use(bodyparser.json());


// Default API

app.get("/",(req,res)=>{
             res.send("Hi This is Zomato Backend")
})


//middlewares
app.use('/restaurant',rout);

app.use('/mealtype',mealtyperoutes);

app.use('/location',locationroutes);

app.use('/menu',menuroutes);

app.use('/payment',paymentroutes);

app.use('/createaccount',userroutes);

app.use('/zomato',rout);


app.listen(PORT,()=>console.log(`server is running on the port : ${PORT}`));