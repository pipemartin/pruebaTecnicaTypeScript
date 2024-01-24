import { Request, Response } from "express";
import { associateDriver } from "../../controllers/drivers/associateDriver.controller";


// When an invalid driver ID is provided, the function should return an error message.
it('should return an error message when an invalid driver ID is provided', async () => {
    const req = {
        body: {
        idDriver: 999
        }
    } as Request;
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response; 
    await associateDriver(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Este conductor no existe" });
});