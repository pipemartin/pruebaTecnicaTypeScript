import {getAllDrivers} from "../../controllers/drivers/getAll.controller"
import Driver from "../../models/drivers/driver"

it('should return a list of drivers when the database has drivers', async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const drivers = [{ id: 1, name: 'John Doe' }];
    Driver.findAll = jest.fn().mockResolvedValue(drivers);

    await getAllDrivers(req, res);

    expect(Driver.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(drivers);
});

it('should return a 404 error when the database has no drivers', async () => {
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const drivers: never[] = [];
  Driver.findAll = jest.fn().mockResolvedValue(drivers);

  await getAllDrivers(req, res);

  expect(Driver.findAll).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({ message: "NO hay conductores digitalizados" });
});