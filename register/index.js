const testDbConnection = require('../config/db/dbConfig');
const CustomErrorHandler =require('../services/CustomErrorHandler')
const httpPost=require('./httpHandlers/httpPost')

module.exports = async function (context, req) {
   

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This is register page ."
        : "If u want can pass your name in query param or boby ";


        let responseObj = {body:{}};
        const isDBconn = await testDbConnection();
        console.log("Database :"+isDBconn)

        if(isDBconn == 200)
        {
            switch(req.method)
            {
                case "POST":
                    try {
                        
                      responseObj = await httpPost(context, req);
                        
                    } catch (error) {
                        
                        console.log(error);
                    }
                

            }

        }
        else{
          return CustomErrorHandler.serverError("method not allowed");

        }

context.res = {
  // status: 200, /* Defaults to 200 */
  body: responseObj
};
   

}