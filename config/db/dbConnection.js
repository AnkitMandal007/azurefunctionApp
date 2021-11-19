const Sequelize = require('sequelize');
const dbConfig = require('../db/dbConfig');
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
}) ;


sequelize.authenticate().
then(()=>{
    console.log("Database Connected !");
})
.catch((err)=>{
    console.log(err);
});

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.myDb = require("../../models/").default(sequelize, Sequelize);

// // module.exports = db;
//  export default db;
export default sequelize;
