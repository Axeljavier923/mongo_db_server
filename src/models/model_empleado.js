import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
  nombre_completo: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente' // Usa el nombre del modelo Cliente
  },
}, {
  timestamps: true,
  collection: "empleados" 
});

export const Empleado = mongoose.model("Empleado", empleadoSchema);