import express from 'express'
import { createToken, SdkPush } from '../controllers/token_Controller.js';

const router = express.Router();

router.post('/payment',createToken,SdkPush);

export default router