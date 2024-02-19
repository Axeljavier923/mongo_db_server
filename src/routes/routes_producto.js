import { Router } from "express";
import { productoVista, productoAll, productoOne, productoUpdate, productoDelete } from "../controllers/controllers_producto.js";

export const routes_producto=Router();

//vista
routes_producto.get("/vista", productoVista);

//crud
routes_producto.get("/",productoAll);
routes_producto.get("/:id", productoOne);
routes_producto.put("/:id", productoUpdate);
routes_producto.delete("/:id", productoDelete);


