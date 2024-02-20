import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre_producto: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  clienteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente', 
    required: true
  }
}, {
  timestamps: true,
  collection: "productos" 
});

export const Producto = mongoose.model("Producto", productoSchema);

