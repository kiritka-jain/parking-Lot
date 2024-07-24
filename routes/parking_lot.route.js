import express from 'express';
import parkingLotController from '../controllers/parking_lot.controller';

const router = express.Router();

// Define routes for parking lot
router.post('/park_car',parkingLotController.parkCar);




export default router;