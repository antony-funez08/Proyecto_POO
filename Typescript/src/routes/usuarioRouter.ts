import express from 'express';
import {
  getAllUsers,
} from '../controllers/usuario';

const router = express.Router();

router.get('/users', getAllUsers);



export default router;