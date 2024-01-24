import Router from "express";
import * as vehicleControllers from "../../controllers/vehicles/index.controller"
import { authJwt } from "../../middlewares/auth.middlewares";

const router = Router()

router.get('/', authJwt, vehicleControllers.getAllVehicles)
router.post('/create', authJwt, vehicleControllers.createVehicle)

export default router;