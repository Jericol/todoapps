const db = require("../utils/database");
const { DataTypes  } = require("sequelize");


const Todos = db.define("todos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_complete",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",

    }
});

module.exports = Todos;