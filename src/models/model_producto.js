import { sequelize, DataTypes } from "../database/db.js";

export const Producto=sequelize.define(
    "producto",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre_producto:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        cantidad:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        precio:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        clienteId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'clientes',
              key: 'id',
            }
        },
    },{
        timestamps:true,
        tableName:"producto"
    }
);

// Producto.sync({force:false}).then(()=>{
//     console.log("Se creo la tabla de producto")
// })

