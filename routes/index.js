import express from 'express';
import carRouter from './car.route.js';
import parkingRouter from './parking_lot.route.js';

const router = express.Router();


router.use('/car', carRouter);
router.use('/parking_lot',parkingRouter);

export default router;
