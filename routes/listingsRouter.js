import express from 'express';
import ListingsAndReviews from '../models/ListingsAndReviews.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    console.log('ListingAndReview Model:', ListingsAndReviews); // 모델 확인
    const listings = await ListingsAndReviews.find();
    console.log(`listings =>`, { listings });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
