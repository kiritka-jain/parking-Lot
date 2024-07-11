import express from 'express';
import carController from '../controllers/car.controller.js';

const router = express.Router();

// Define routes for cars
router.get('/', carController.getCarInfo);
router.post('/', carController.addCar);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;
