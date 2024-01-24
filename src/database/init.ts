import User from '../models/users/users'
import Driver from '../models/drivers/driver'
import Vehicle from '../models/vehicles/vehicles'
import Order from '../models/orders/order'

const dbInit = () => Promise.all([
    User.sync({ force: false }),
    Driver.sync({ force: false }),
    Vehicle.sync({ force: false }),
    Order.sync({ force: false })
])

export default dbInit