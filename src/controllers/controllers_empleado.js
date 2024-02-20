import {Empleado} from "../models/model_empleado.js";
import {Cliente} from "../models/model_client.js";

//vista
export const empleadoVista=(req, res)=>{
    res.render("empleado")
}

//crud
export const empleadoAll=async(req, res)=>{
    try {
        const listaEmpleados = await Empleado.find({}).populate('cliente');
        return res.status(200).json(listaEmpleados);
      } catch (error) {
        console.log("Hubo un error al obtener la lista de empleados", error);
        return res.status(500).json({
          message: "No se pudo obtener la lista de empleados"
        });
      }
}

export const empleadoOne=async(req, res)=>{
    try {
        const {id}=req.params;
        const unEmpleado=await Empleado.findById(id).populate("clientes")
        
        res.status(200).json(unEmpleado)
    } catch (error) {
        res.status(500).json({
            message:"no se pudo obtener el cliente"
        })
    }
}

export const empleadoNuevo=async(req, res)=>{
    try {
        const { nombre_completo, edad, genero }= req.body;
        const crear_empleado= new Empleado({nombre_completo, genero, edad})
        await crear_empleado.save();

        return res.status(200).json(
            {
            message:"se creo con exito el nuevo empleado"
            }
        ) 
    } catch (error) {
        console.log("hubo un error al crear el nuevo empleado");
        return  res.status(500).json({
            messaje:"no se puede crear el nuevo el empleado"
        })
    }
}

export const clientNuevo=async(req, res)=>{
    try {
        const {empleadoId} =req.params;
        const { nombre_completo, edad, genero} = req.body
        const newClient=new Cliente({ nombre_completo, edad, genero, empleadoId})
        await newClient.save();
        
        return res.status(201).json({
            message:"se creo el cliente"
    })
    } catch (error) {
        console.log("error al crear el cliente" + error);
        return res.status(500).json({
            message:"no se pudo crear el cliente",
        })
    }
}

export const empleadoUpdate=async(req, res)=>{
    try {
        const{id}=req.params;
        console.log(id);
        const updateClient=await Empleado.findByIdAndUpdate(id, req.body)
        return res.status(200).json({
            message:"Se actualizo correctamente el cliente",
            updateClient
        })
    } catch (error) {
        return res.status(500).json({
            message:"no se actualizo correctamente el cliente",
        })
    }
}

export const empleadoDelete=async(req, res)=>{
    try {
        const { id } = req.params;
    
        if (!id) {
          return res.status(400).json({
            message: "No se proporcionó el ID"
          });
        }
    
        const deletedEmployee = await Empleado.findOneAndDelete({ _id: id });
    
        if (!deletedEmployee) {
          return res.status(404).json({
            message: "Empleado no encontrado"
          });
        }
    
        return res.status(200).json({
          message: "Se eliminó correctamente el empleado",
          deletedEmployee
        });
      } catch (error) {
        console.error("Hubo un error al eliminar el empleado:", error);
        return res.status(500).json({
          message: "No se pudo eliminar correctamente el empleado",
          error: error.message
        });
      }
}