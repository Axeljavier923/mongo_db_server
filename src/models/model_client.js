import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre_completo: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  empleadoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleado',
    required: false
  },
  productos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: false
  },
}, {
  timestamps: true,
  collection: "clientes" 
});

export const Cliente = mongoose.model("Cliente", clienteSchema);