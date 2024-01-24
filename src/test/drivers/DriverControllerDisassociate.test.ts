import Driver from "../../models/drivers/driver"
import {disassociateDriver} from "../../controllers/drivers/disassociateDriver.controller"
import { Request, Response } from "express";

// Returns a 404 error if the driver ID is not found in the database.
it('should return a 404 error when the driver ID is not found', async () => {
    const req = {
        body: {
        idDriver: 1
        }
    } as Request;
    const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
    } as unknown as Response;
    Driver.findByPk = jest.fn().mockResolvedValue(null);

    await disassociateDriver(req, res);

    expect(Driver.findByPk).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Este conductor no existe" });
});