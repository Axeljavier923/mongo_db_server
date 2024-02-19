// En associate.js
import { Cliente } from "../models/model_client.js";
import { Producto } from "../models/model_producto.js";
import { Empleado } from "../models/model_empleado.js";

export const associate = async () => {
  try {
    // Crear las tablas
    await Cliente.sync({ force: false });
    await Producto.sync({ force: false });
    await Empleado.sync({ force: false });
    
    // Asociar modelos
    Cliente.hasMany(Producto, {
      foreignKey: 'clienteId',
      sourceKey: 'id',
    });

    Empleado.hasMany(Cliente, {
      foreignKey: 'empleadoId',
      sourceKey: 'id',
    });

    console.log('Se crearon las tablas y se asociaron los modelos.');

  } catch (error) {
    console.error('Error al sincronizar las tablas y asociar los modelos:', error);
  }
};
