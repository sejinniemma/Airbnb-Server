import mongoose from 'mongoose';
// Mongoose 스키마 정의
const listingSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  listing_url: { type: String, required: true },
  name: { type: String, required: true },
  summary: { type: String, required: true },
  space: { type: String },
  description: { type: String, required: true },
  neighborhood_overview: { type: String },
  notes: { type: String },
  transit: { type: String },
  access: { type: String },
  interaction: { type: String },
  house_rules: { type: String },
  property_type: { type: String, required: true },
  room_type: { type: String, required: true },
  bed_type: { type: String, required: true },
  minimum_nights: { type: Number, required: true },
  maximum_nights: { type: Number, required: true },
  cancellation_policy: { type: String, required: true },
  last_scraped: { type: Date, required: true },
  calendar_last_scraped: { type: Date, required: true },
  first_review: { type: Date, required: true },
  last_review: { type: Date, required: true },
  accommodates: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  beds: { type: Number, required: true },
  number_of_reviews: { type: Number, required: true },
  bathrooms: { type: mongoose.Types.Decimal128, required: true },
  amenities: { type: [String], required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  extra_people: { type: mongoose.Types.Decimal128, required: true },
  guests_included: { type: mongoose.Types.Decimal128, required: true },
  images: {
    thumbnail_url: { type: String },
    medium_url: { type: String },
    picture_url: { type: String, required: true },
    xl_picture_url: { type: String },
  },
  host: {
    host_id: { type: String, required: true },
    host_url: { type: String, required: true },
    host_name: { type: String, required: true },
    host_location: { type: String, required: true },
    host_about: { type: String },
    host_thumbnail_url: { type: String },
    host_picture_url: { type: String },
    host_neighbourhood: { type: String, required: true },
    host_is_superhost: { type: Boolean, required: true },
    host_has_profile_pic: { type: Boolean, required: true },
    host_identity_verified: { type: Boolean, required: true },
    host_listings_count: { type: Number, required: true },
    host_total_listings_count: { type: Number, required: true },
    host_verifications: { type: [String], required: true },
  },
  address: {
    street: { type: String, required: true },
    suburb: { type: String, required: true },
    government_area: { type: String, required: true },
    market: { type: String, required: true },
    country: { type: String, required: true },
    country_code: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ['Point'], // GeoJSON 타입
        required: true,
      },
      coordinates: { type: [Number], required: true }, // [경도, 위도]
      is_location_exact: { type: Boolean, required: true },
    },
  },
  availability: {
    availability_30: { type: Number, required: true },
    availability_60: { type: Number, required: true },
    availability_90: { type: Number, required: true },
    availability_365: { type: Number, required: true },
  },
  review_scores: {
    review_scores_accuracy: { type: Number, required: true },
    review_scores_cleanliness: { type: Number, required: true },
    review_scores_checkin: { type: Number, required: true },
    review_scores_communication: { type: Number, required: true },
    review_scores_location: { type: Number, required: true },
    review_scores_value: { type: Number, required: true },
    review_scores_rating: { type: Number, required: true },
  },
  reviews: [
    {
      _id: { type: String, required: true },
      date: { type: Date, required: true },
      listing_id: { type: String, required: true },
      reviewer_id: { type: String, required: true },
      reviewer_name: { type: String, required: true },
      comments: { type: String, required: true },
    },
  ],
});

// Listing 모델 생성
const ListingAndReviews = mongoose.model('ListingAndReviews', listingSchema);

export default ListingAndReviews;
