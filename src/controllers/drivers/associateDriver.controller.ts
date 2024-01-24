import { Request, Response } from "express";
import Driver from "../../models/drivers/driver"
import Vehicle from "../../models/vehicles/vehicles";
import {Associate} from "../../Imodels/drivers/IAssociateDriverController"

export const associateDriver = async (req: Request,res: Response) =>{ 
    const {idDriver}: Associate = req.body
    try {
        const driver = await Driver.findByPk(idDriver)
        //valida si el conductor que esta ingresando al endpoint existe en la bd 
        if(!driver) return res.status(404).json({message: "Este conductor no existe"})
        const vehicles = await Vehicle.findAll({
            where: {
                conductorID: idDriver
        }})
        // valida si el conductor tiene vehiculo
        if(vehicles.length > 0) return res.status(404).json({message: "Este conductor ya esta asociado a un vehiculo"})
        // si el conductor no tiene vehiculo muestra los disponibles
        const allvehicles = await Vehicle.findAll({
            where: {
                conductorID: null
        }})
        //valida si en la tabla de vehiculos hay mas de uno
        if(allvehicles.length == 0) return res.status(404).json({message: "No hay vehiculos disponibles"})
        return res.status(200).json(allvehicles)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}