import { Request, Response } from "express";
import Driver from "../../models/drivers/driver"
import Vehicle  from "../../models/vehicles/vehicles";

export const disassociateDriver = async (req: Request, res: Response) => {
    const {idDriver} = req.body
    try {
        const driver = await Driver.findByPk(idDriver)
        if(!driver) return res.status(404).json({message: "Este conductor no existe"})
        const vehicles = await Vehicle.findAll({
            where: {
                conductorID: idDriver
        }})
        // valida si el conductor tiene vehiculo
        if(vehicles.length == 0) return res.status(404).json({message: "Este conductor no esta asociado a un vehiculo"})
        return res.json(vehicles)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}