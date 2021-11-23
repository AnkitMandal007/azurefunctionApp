
const Joi = require('joi');
const xss = require('xss');
const errorHandler = require('../../services/errorHandler');

const httppost = (context,req)=>{
    let resp = {
        status: 200,
        body: { message: "", data: "", status: false },
    };

    console.log("Inside httpPostHandler method"+req.body);
 //validation request
 const registerSchema = Joi.object({

    name: Joi.string().min(4).max(40),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeat_password:Joi.ref('password')

});


const filterXSS = {
    name: xss(req.body.name),
    email: xss(req.body.email),
    password: xss(req.body.password),
    repeat_password: xss(req.body.repeat_password)
  };

const { value, error } = registerSchema.validate(filterXSS);

console.log(value);
if(error)
{

    return errorHandler(error,req,resp);
   
}
else{
   resp.status=200;
   resp.body.message="Register Successfully";
   resp.body.data=value;

}

}
