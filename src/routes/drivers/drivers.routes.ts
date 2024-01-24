import Router from "express";
import * as driversControllers from "../../controllers/drivers/index.controller"
import { authJwt } from "../../middlewares/auth.middlewares";

const router = Router()

router.get('/', authJwt, driversControllers.getAllDrivers)
router.post('/create',authJwt, driversControllers.createDriver)
router.post('/associateVehicles',authJwt, driversControllers.associateDriver)
router.post('/disassociateVehicule',authJwt, driversControllers.disassociateDriver)

export default router