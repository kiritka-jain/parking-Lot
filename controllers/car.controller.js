
import { CarService } from '../services/carService.js';
import { NotFoundError,ValidationError } from '../errors/customErrors.js';


const carController = {
  addCar: async(req, res) => {
    const { make, model, color, number, year } = req.body;
  
    try {
      const newCar = await CarService.addCar({ make, model, color, number, year });
      res.status(201).json(newCar);
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({ message: error.message });
      } else {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    }
  },
  newCar: (req, res) => {
    res.render("new_car", {name: "new_car"});
  },

  getCarById: async(req, res) => {
    const carId = req.params.id;
    try {
      const carId = req.params.id;
      const car = await CarService.getCarById(carId);

      if (!car) {
         return res.status(404).send('Car not found');
      }

      res.render('car_details', {
         make: car.make,
         model: car.model,
         color: car.color,
         number: car.number,
         year: car.year
      });
    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error(error);
        res.status(error.statusCode || 500).json({ message: error.message || 'Server error' });
      }
    }
  },

  deleteCar: async(req, res) => {
    const carId = req.params.id;
    try {
      const message = await CarService.deleteCarById(carId);
      res.status(200).json({ message: message });

    } catch (error) {
      if (error instanceof NotFoundError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        console.error(error);
        res.status(error.statusCode || 500).json({ message: error.message || 'Server error' });
      }
    }
  },
  updateCar: (req,res)=>{
    console.log("Car updated Sucessfully.")
  }
}

export default carController;
