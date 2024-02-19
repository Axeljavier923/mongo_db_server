import {body} from "express-validator";

export const createSchemaProducto=[
    body("nombre_producto")
    .notEmpty().withMessage('El nombre del producto no debe estar vacío.')
    .isString().withMessage('El nombre del producto debe ser un string.')
    .isLength({min: 4, max: 70})
    .withMessage('Debe tener  minimo 4 caracteres con un maximo de 70 caracteres'),
  body('precio')
    .exists()
    .notEmpty().withMessage("no debe estar vacio el precio")
    .isNumeric().withMessage("debe ser un numero entero el precio"),
  body('cantidad')
    .exists()
    .notEmpty().withMessage('la cantidad de producto no debe estar vacío.')
    .isNumeric().withMessage("debe ser un numero entero la cantidad de los productos"),
]