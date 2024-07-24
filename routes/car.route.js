import express from 'express';
import carController from '../controllers/car.controller.js';

const router = express.Router();

// Define routes for cars
router.post('/', carController.addCar);
router.get('/add_car', carController.newCar);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;
