import { sequelize, DataTypes } from "../database/db.js";

export const Cliente=sequelize.define(
    "cliente",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre_completo:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        genero:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        edad:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        empleadoId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'empleados',
              key: 'id',
            }
        },
    },
    {
        timestamps:true,
        tableName: "clientes",
    }
);

//crear tabla

// Cliente.sync({force:false}).then(()=>{
//     console.log("Se a creado la tabla de cliente")
// }).catch(()=>{
//     console.log("no se pudo crear la tabla de cliente")
// })

