import { Router } from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = Router();

router.post('/', verifyAdmin, createHotel);

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/:id', verifyAdmin, deleteHotel);

router.get('/:id', getHotel);

router.get('/', getHotels);

export default router;
