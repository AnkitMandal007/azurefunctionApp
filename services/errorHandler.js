const {DEBUG_MODE} = require('../config/index');
const { ValidationError } =require('joi') ;
const CustomErrorHandler =require('../services/CustomErrorHandler');

const errorHandler=(err,req,res) => {

    

    let statusCode=500;
    let data={
        message:"Internal server error",
        ...(DEBUG_MODE==='true' && {orginalError:err.message})

    };
    console.log("Hello World");
    if(err instanceof ValidationError){

        statusCode = 422;
        data = {
            message: err.message
        }
            
    }

    if(err instanceof CustomErrorHandler)
    {
        statusCode=err.status;
        data = {
            message: err.message
        }
    }

    return res.status(statusCode).json(data);
}

module.exports= errorHandler;