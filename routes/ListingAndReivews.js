import express from 'express';
import ListingAndReviews from '../models/ListingAndReviews.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const listings = await ListingAndReviews.find();
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
