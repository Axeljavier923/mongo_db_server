import { Cliente } from "../models/model_client.js";
import { Producto } from "../models/model_producto.js";

//vista
 export const vistaCliente=(req, res)=>{
    res.render("cliente");
}
//crud
export const clientAll = async (req, res) => {
    try {
        const listaClient = await Cliente.findAll({
            include:{
                model:Producto
            }
        });

        return res.status(200).json(listaClient);
    } catch (error) {
        console.log("Hubo un error al obtener todas la lista de usuario", error);
        return res.status(500).json({
            message: "No se pudo obtener la lista de clientes"
        });
    }
};

export const clientOne=async(req, res)=>{
    try {
        const {id} = req.params;
        const unClient=await Cliente.findOne(
            {
                where: {
                  id,
                },
                include: Producto
            })
        res.status(200).json(unClient);
    } catch (error) {
        console.log("Hubo un error al encontrar el cliente" + error)
        return res.status(500).json({
            message:"no se pudo obtener la informacion de este cliente" 
        })
    }
}

export const productoNuevo = async (req, res) => {
    try {
      const { clienteId } = req.params;
      const { nombre_producto, cantidad, precio } = req.body;
    
      const nuevoProducto = new Producto({
        clienteId,
        nombre_producto,
        cantidad,
        precio,
      });
  
      await nuevoProducto.save();
  
      return res.status(200).json({
        message: "Se creó con éxito el producto para el cliente con ID:",
        clienteId,
        nuevoProducto,
      });
    } catch (error) {
      console.error("Error al crear el producto", error);
      return res.status(500).json({
        message: "No se pudo crear el producto",
      });
    }
  };

export const clientEdit=async(req, res)=>{
    try {
        const {id} = req.params;
        const updateClient=await Cliente.findByPk(id);
        await updateClient.update(req.body);
        return res.status(200).json({
            message:"se edito el cliente"
        })
    } catch (error) {
        console.log("error al editar un cliente");
        return res.status(500).json({
            message:"no se pudo actualizar el cliente",
        })
    }
}

export const clientDelete=async(req, res)=>{
    try {
        const {id} = req.params;
        if(!id){
            throw({
                status:400,
                message:"no se a enviado el id"
            })
        }
        const deleteClient=await Cliente.findByPk(id);
        await deleteClient.destroy({estado:false})
        return res.status(200).json({
            message:"se elemino el cliente correctamente",
        })
    } catch (error) {
        console.log("no se elimino el cliente");
        return res.status(500).json({
            message:"no se elemino el cliente",
        })
    }
}

