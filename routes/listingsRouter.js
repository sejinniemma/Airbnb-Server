import express from 'express';
import ListingsAndReview from '../models/ListingsAndReview.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const listings = await ListingsAndReview.find();
    console.log(`listings =>`, { listings });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
