// src/database/db.js
import dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";


export const dbURL = "mongodb://127.0.0.1:27017/backend_mongoDb";

export const conectarDB = async () => {
  try {
    await connect(dbURL);
    console.log("Nos hemos conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar a la base de datos:", error);
  }
};

