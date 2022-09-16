import { Router } from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = Router();

router.post('/', verifyAdmin, createHotel);

router.put('/find/:id', verifyAdmin, updateHotel);

router.delete('/find/:id', verifyAdmin, deleteHotel);

router.get('/find/:id', getHotel);

router.get('/', getHotels);

router.get('/countByCity', countByCity);

router.get('/countByType', countByType);

export default router;
