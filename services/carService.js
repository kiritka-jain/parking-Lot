// services/carService.js

import db from '../models/index.model.js'; 
import { NotFoundError, ServerError,ValidationError } from "../errors/customErrors.js";

export class CarService {
  static async getCarById(id) {
    try {
      const car = await db.Car.findByPk(id);
      if (!car) {
        throw new NotFoundError("Car not found");
      }
      return car;
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new ServerError("Error fetching car");
    }
  }
  static async addCar(carData) {
    try {
      const newCar = await db.Car.create(carData);
      await ParkingLot.create({ slot_num, carId: car.id });
      return newCar;
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        throw new ValidationError('Invalid car data');
      }
      throw new ServerError('Error adding car');
    }
  }
  static async deleteCarById(id) {
    try {
      const count = await db.Car.destroy({ where: { id: id } });
      if (count == 1) {
         return "Record deleted Sucessfully." 
      }
      throw new NotFoundError("Car not found");
      
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      }
      throw new ServerError("Error fetching car");
    }
  }
}


