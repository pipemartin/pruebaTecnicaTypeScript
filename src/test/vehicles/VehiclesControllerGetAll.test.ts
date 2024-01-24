import { Request, Response } from "express";
import { getAllVehicles } from "../../controllers/vehicles/getAll.controller";
import Vehicle from "../../models/vehicles/vehicles"
// Should return a 200 status code and an array of vehicles when there are vehicles in the database
it('should return a 200 status code and an array of vehicles when there are vehicles in the database', async () => {
    const req = {} as Request;
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response;
    Vehicle.findAll = jest.fn().mockResolvedValue([{ id: 1, modelo: "Model 1", placa: "ABC123", capacidad: "4" }]);

    await getAllVehicles(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, modelo: "Model 1", placa: "ABC123", capacidad: "4" }]);
});