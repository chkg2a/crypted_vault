import express from 'express';
import { Router } from 'express';
import auth from '../controllers/auth.controller.js';
const router=Router();

router.post('/auth',auth);

export default router