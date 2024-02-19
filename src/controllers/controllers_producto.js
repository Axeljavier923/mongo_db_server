import {Producto} from "../models/model_producto.js"
import {Cliente} from "../models/model_client.js"

//vista
export const productoVista=(req, res)=>{
  res.render("producto")
}

//crud
export const productoAll=async(req, res)=>{
  try {
    const listaProducto=await Producto.findAll();
    res.status(200).json({
      message:"se obtuvo con exito la lista de producto",
    listaProducto
    })
  } catch (error) {
    res.status(500).json({
      message:"no se obtuvo con exito la lista de producto",
    })
  }
}

export const productoOne=async(req, res)=>{
  try {
    const {id}= req.params; 
    const unProducto=await Producto.findOne({
      where:{
        id
      }
    })
    return res.status(200).json({
      message:"se pudo obtener con exito el producto",
      unProducto
    })
  } catch (error) {
    return res.status(500).json({
      message:"no se pudo obtener producto",
    })
  }
}

export const productoUpdate=async(req, res)=>{
  try {
    const {id}= req.params;
    const productoActualizado=await Producto.findByPk(id);
    await productoActualizado.update(req.body)
    return res.status(200).json({
      message:"Se actualizo con exito el producto"
    })
  } catch (error) {
    return res.status(500).json({
      message:"no se actualizo con exito el producto"
    })
  }
}

export const productoDelete=async(req, res)=>{
  try { 
    const {id}= req.params;
    if(!id){
      return res.status(400).json({
        message:"No se pudo encontrar el id del producto"
      })
    }
    const elimnarProducto=await Producto.findByPk(id);
    await elimnarProducto.destroy(req.body);
    return res.status(200).json({
      message:"Se elimino con exito el producto"
    })
  } catch (error) {
    return res.status(500).json({
      message:"no se pudo eliminar exito el producto"
    })
  }
}