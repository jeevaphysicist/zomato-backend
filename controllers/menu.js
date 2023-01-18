const Menu  = require('../models/menuitemodel');

exports.getallmenuitems =(req,res)=>{
     let {rname}= req.body
    let filter={restaurantName : rname};
    // console.log('restauranName :',req.params.rname);

    Menu.find(filter).then( result=>{
        res.status(200).json({
            message: "API is fetched successfully",
            data: result
        })
    })
    .catch(erorr=>{
        res.status(404).json({
            message :" some problem in database",
            error:erorr
        })
    });
        
}