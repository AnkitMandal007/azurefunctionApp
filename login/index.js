const testDbConnection = require('../config/db/dbConfig');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ".This login page ."
        : "This HTTP triggered function executed successfully.";

        let responseObj = {body:{}};
        const isDBconn = await testDbConnection();
        console.log(`Database :${isDBconn}`)

        if(isDBconn == 200)
        {
            switch(req.method)
            {
                case "POST":
                    try {
                        console.log(`db Connected successfully with ${req.method} method called !`)
                        
                    } catch (error) {
                        
                        console.log(error);
                    }
                case "GET":
                    try {
                        console.log(`db Connected successfully with ${req.method} method called !`)
                        
                    } catch (error) {
                        
                        console.log(error);
                    }

            }

        }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}