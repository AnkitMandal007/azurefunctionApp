import { INTEGER, STRING } from 'sequelize';
import { sequelize } from '../config/db/dbConnection';


const User = sequelize.define("user",{

    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false,
    },
    password: {
        type: STRING,
        allowNull: false
    },
    role: {
        type: STRING,
        defaultValue: 'customer'
    }

});

export default User;