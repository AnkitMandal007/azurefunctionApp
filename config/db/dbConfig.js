const { Connection, Request } = require("tedious");
const sql = require('mssql')
const env_var=require('../index')
const testDbConnection = async ()=> {
    const config = {
        authentication: {
            options: {
                userName: env_var.development.DB_USER,
                password: env_var.development.DB_PWD,
            },
            type: "default"
        },
        server: env_var.development.SERVER_NAME,
        options: {
            database: "test_db",
            encrypt: true
        }
    };
    const connection = new Connection(config);
    console.log(config);
    
    connection.on("connect", err => {
        if (err) {
            console.log(err);
            if(err!=null){
                console.log("not connected");
           }
            return {
                status:403
            }
        } else {
            return {
                status:200,
            }
        }
    });

    connection.connect();
}

module.exports=testDbConnection;