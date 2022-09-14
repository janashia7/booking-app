import { Router } from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';

Router;
const router = Router();

// TODO: Create
router.post('/', createHotel);

// TODO: Update
router.put('/:id', updateHotel);

// TODO: Delete
router.delete('/:id', deleteHotel);

// TODO: Get
router.get('/:id', getHotel);

// TODO: Get All
router.get('/', getHotels);

export default router;
