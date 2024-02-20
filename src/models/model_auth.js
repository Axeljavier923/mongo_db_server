import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true,
  collection: "auth"
});

export const Auth = mongoose.model("Auth", authSchema);


export const getUserById = async (userId) => {
  try {
    const user = await Auth.findById(userId);
    return user;
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    throw error;
  }
};

export const getAllUsers=async ()=>{
  return await Auth.find() ?? null;
}

export const getOneUser = async (id) => {
  return await Auth.findById(id) ?? null;
};

export const EditOneUsers=async (id)=>{
  return await Auth.findById(id);;
}

export const DeleteOneUsers=async (id)=>{
  return await Auth.findById(id)
}

export const RegisterOneUsers=async (correo, hashedPassword)=>{
  return await Auth.create({
      correo,
      password: hashedPassword,
    });
}

export const LoginOneUsers = async (correo) => {
  return await Auth.findOne({ correo: correo });
};



