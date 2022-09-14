import express from 'express';
import { createError } from '../errors/error.js';
import Hotel from '../models/Hotel.js';

const router = express.Router();

// TODO: Create
router.post('/', async (req, res) => {
  try {
    const savedHotel = await Hotel.create(req.body);
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: Update
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO: Delete
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO: Get
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// TODO: Get All
router.get('/', async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
});

export default router;
