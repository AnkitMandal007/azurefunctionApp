const dotenv = require('dotenv') ;
dotenv.config();

module.exports={
    development:{
        DEBUG_MODE:process.env.DEBUG_MODE,
        DB_USER:process.env.DB_USER,
        DB_PWD:process.env.DB_PWD,
        DB_NAME:process.env.DB_NAME,
        SERVER_NAME:process.env.SERVER_NAME

    }
    
};