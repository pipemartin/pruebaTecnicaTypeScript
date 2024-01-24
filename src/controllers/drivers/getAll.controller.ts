import Driver from "../../models/drivers/driver"

export const getAllDrivers = async(_req: any, res: any) =>{
    try {
        const drivers = await Driver.findAll()
        if(drivers.length ===0) return res.status(404).json({message: "NO hay conductores digitalizados"})
        return res.status(200).json(drivers)
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}