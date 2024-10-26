import express from 'express';
import ListingsAndReviews from '../models/ListingsAndReviews.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const listings = await ListingsAndReviews.aggregate([
      { $sample: { size: 10 } },
    ]);

    console.log(`listings =>`, { listings });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
