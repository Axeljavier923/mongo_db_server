import { Router } from "express";
import {empleadoVista, empleadoAll, empleadoOne, empleadoNuevo, empleadoDelete, empleadoUpdate, clientNuevo} from "../controllers/controllers_empleado.js"
import {validator} from "../middleware/validador.js"
import {createEmpleadoSchema} from "../models/schemas/schema_empleado.js"
import {createClienteSchema} from "../models/schemas/schema_cliente.js";
export const routes_empleado=Router();

//vista 
routes_empleado.get("/vista", empleadoVista);

//crud
routes_empleado.get("/",  empleadoAll);
routes_empleado.get("/:id", empleadoOne)
routes_empleado.post("/", createEmpleadoSchema, validator, empleadoNuevo)
routes_empleado.post("/:empleadoId/cliente", createClienteSchema, validator, clientNuevo)
routes_empleado.put("/:id", empleadoUpdate)
routes_empleado.delete("/:id", empleadoDelete)


