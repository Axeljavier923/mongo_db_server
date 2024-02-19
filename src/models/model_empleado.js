import { sequelize, DataTypes } from "../database/db.js";

export const Empleado=sequelize.define(
    "empleado", {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre_completo:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        edad:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        genero:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamps:true,
        tableName:"empleados",
    },
)

// Empleado.sync({force:false}).then(()=>{
//     console.log("Se creo la tabla de empleados")
// })

