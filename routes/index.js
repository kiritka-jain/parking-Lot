import express from 'express';
import carRouter from './car.route.js';

const router = express.Router();


router.use('/car', carRouter);

export default router;
