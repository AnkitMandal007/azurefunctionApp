module.exports = async function (context, req) {
    

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This is register page ."
        : "If u want can pass your name in query param or boby ";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}