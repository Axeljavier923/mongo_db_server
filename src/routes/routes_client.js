import {Router} from "express";
import {vistaCliente, clientAll, clientOne,  clientEdit, clientDelete, productoNuevo} from "../controllers/controllers_cliente.js"
import {createSchemaProducto} from "../models/schemas/schema_producto.js"
import {validator} from "../middleware/validador.js"

export const routes_cliente=Router()

//vista
routes_cliente.get("/vista", vistaCliente)

//crud
  routes_cliente.get("/",  clientAll)
  routes_cliente.get("/:id", clientOne)
  routes_cliente.post("/:clienteId/producto", createSchemaProducto , validator ,productoNuevo);
  routes_cliente.put("/:id", clientEdit)
  routes_cliente.delete("/:id", clientDelete)
