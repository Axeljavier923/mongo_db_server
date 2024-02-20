import mongoose from "mongoose";
import { Cliente } from "../models/model_client.js";
import { Producto } from "../models/model_producto.js";
import { Empleado } from "../models/model_empleado.js";
import { Auth } from "../models/model_auth.js";

export const associate = async () => {
  try {

    Producto.schema.add({
      clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
      }
    });

    Cliente.schema.add({
      empleadoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado' 
      }
    });

        // Crear un nuevo empleado
        const nuevoEmpleado = await Empleado.create({
          nombre_completo: "Nombre del Empleado",
          edad: 30,
          genero: "Masculino"
        });
    
        // Crear un nuevo cliente y asociarlo al empleado
        const nuevoCliente = await Cliente.create({
          nombre_completo: "Nombre del Cliente",
          genero: "Femenino",
          edad: 25,
          empleado: nuevoEmpleado._id
        });
    
        // Crear un nuevo producto y asociarlo al cliente
        const nuevoProducto = await Producto.create({
          nombre_producto: "Nombre del Producto",
          cantidad: 5,
          precio: 10,
          cliente: nuevoCliente._id
        });

    console.log('Se crearon las colecciones y se asociaron los modelos.');

  } catch (error) {
    console.error('Error al crear las colecciones y asociar los modelos:', error);
  }
};
