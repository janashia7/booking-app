import { Router } from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = Router();

router.post('/:hotelId', verifyAdmin, createRoom);

router.put('/:id/hotelId', verifyAdmin, updateRoom);

router.delete('/:id', verifyAdmin, deleteRoom);

router.get('/:id', getRoom);

router.get('/', getRooms);

export default router;
