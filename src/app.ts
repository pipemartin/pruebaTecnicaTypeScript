import morgan from "morgan";
import Express from "express";
import driversRoutes from "./routes/drivers/drivers.routes"
import vehiclesRoutes from "./routes/vehicles/vehicles.routes"
import usersRouter from "./routes/users/users.routes";
const app = Express()




// Middlewares
app.use(morgan("dev"));
app.use(Express.json());

//Routes API
app.use('/api/drivers',driversRoutes)
app.use('/api/vehicles',vehiclesRoutes)
app.use('/api/users', usersRouter)

export default app;