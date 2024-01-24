import Router from "express";
import * as usersControllers from "../../controllers/users/index.controller"
const router = Router()

router.post('/create', usersControllers.createUser)
router.post('/login', usersControllers.loginUser)
export default router;