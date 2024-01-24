import { Request, Response } from "express";
import Vehicle from "../../models/vehicles/vehicles";
import {vehicleAttributes, VehicleController} from "../../Imodels/vehicles/IVehicleControllerCreate"

export const createVehicle = async (req: Request, res: Response) => {
    try {
        const requiredFields = ['modelo', 'placa', 'capacidad'];
        const {modelo, placa, capacidad, conductorID}: VehicleController = req.body
        //validacion de campos obligatorios
        if (!modelo || !placa || !capacidad){
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }if (requiredFields.some(field => req.body[field] === undefined)) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        } if (!requiredFields.every(field => typeof req.body[field] === 'string')) {
            return res.status(400).json({ message: 'Todos los campos deben ser de tipo string.' });
        }

        //INsert in table vehicles db
        const newVehicleData: vehicleAttributes = {
            id: null,
            modelo, 
            placa, 
            capacidad, 
            conductorID
        }
        const newVehicle = await Vehicle.create(newVehicleData)
        return res.json(newVehicle)

    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
    
}