import { Request, Response } from 'express';
import Driver from "../../models/drivers/driver"
import {DriverController, driverAttributes} from "../../Imodels/drivers/IDriverControllerCreate"

// declarar la variable dentro de request global de usuario
declare global {
    namespace Express {
      interface Request {
        user?: { /* Tipo de la información del usuario */ };
      }
    }
}

export const createDriver = async (req: Request, res: Response) =>{
    try {
        const requiredFields = ['identificacion', 'apellido', 'nombre', 'telefono', 'direccion'];
        const {identificacion, apellido, nombre, telefono, direccion}: DriverController = req.body
        //se obtiene el id que viene del request del middlewares
        const { id } = req.user as { id: string | number };
        // Validación de campos obligatorios
        if (!identificacion || !apellido || !nombre || !telefono || !direccion) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        } if (requiredFields.some(field => req.body[field] === undefined)) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        } if (!requiredFields.every(field => typeof req.body[field] === 'string')) {
            return res.status(400).json({ message: 'Todos los campos deben ser de tipo string.' });
        }
        const newDriverData: driverAttributes= {
            id: null,
            identificacion,
            apellido,
            nombre,
            telefono,
            direccion,
            userID: id
        }
        //Insert in table db
        const newDriver  = await Driver.create(newDriverData);
        return res.json(newDriver)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}