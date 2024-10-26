import mongoose from 'mongoose';

// 리뷰 스키마 정의
const reviewSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  date: { type: Date, required: true },
  listing_id: { type: String, required: true },
  reviewer_id: { type: String, required: true },
  reviewer_name: { type: String, required: true },
  comments: { type: String, required: true },
});

// 주소 스키마 정의
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  suburb: { type: String, required: true },
  government_area: { type: String, required: true },
  market: { type: String, required: true },
  country: { type: String, required: true },
  country_code: { type: String, required: true },
  location: {
    type: {
      type: String, // "Point"
      enum: ['Point'],
      required: true,
    },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
    is_location_exact: { type: Boolean, required: true },
  },
});

// 호스트 스키마 정의
const hostSchema = new mongoose.Schema({
  host_id: { type: String, required: true },
  host_url: { type: String, required: true },
  host_name: { type: String, required: true },
  host_location: { type: String, required: true },
  host_about: { type: String, default: '' },
  host_thumbnail_url: { type: String, required: true },
  host_picture_url: { type: String, required: true },
  host_neighbourhood: { type: String, required: true },
  host_is_superhost: { type: Boolean, required: true },
  host_has_profile_pic: { type: Boolean, required: true },
  host_identity_verified: { type: Boolean, required: true },
  host_listings_count: { type: Number, required: true },
  host_total_listings_count: { type: Number, required: true },
  host_verifications: { type: [String], required: true }, // 호스트 인증 방법 배열
});

// 주요 스키마 정의
const listingSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // listing_id
  listing_url: { type: String, required: true },
  name: { type: String, required: true },
  summary: { type: String, required: true },
  space: { type: String, default: '' },
  description: { type: String, required: true },
  neighborhood_overview: { type: String, default: '' },
  notes: { type: String, default: '' },
  transit: { type: String, default: '' },
  access: { type: String, default: '' },
  interaction: { type: String, default: '' },
  house_rules: { type: String, default: '' },
  property_type: { type: String, required: true },
  room_type: { type: String, required: true },
  bed_type: { type: String, required: true },
  minimum_nights: { type: Number, required: true }, // 문자열에서 숫자로 변경
  maximum_nights: { type: Number, required: true }, // 문자열에서 숫자로 변경
  cancellation_policy: { type: String, required: true },
  last_scraped: { type: Date, required: true }, // Date로 변경
  calendar_last_scraped: { type: Date, required: true }, // Date로 변경
  accommodates: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  beds: { type: Number, required: true },
  number_of_reviews: { type: Number, required: true },
  bathrooms: { type: mongoose.Schema.Types.Decimal128, required: true }, // 소수점 있는 숫자
  amenities: { type: [String], required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true },
  security_deposit: { type: mongoose.Schema.Types.Decimal128, default: 0 }, // 기본값 추가
  cleaning_fee: { type: mongoose.Schema.Types.Decimal128, default: 0 }, // 기본값 추가
  extra_people: { type: mongoose.Schema.Types.Decimal128, default: 0 }, // 기본값 추가
  guests_included: { type: mongoose.Schema.Types.Decimal128, default: 1 }, // 기본값 추가
  images: {
    thumbnail_url: { type: String, default: '' },
    medium_url: { type: String, default: '' },
    picture_url: { type: String, required: true },
    xl_picture_url: { type: String, default: '' },
  },
  host: { type: hostSchema, required: true }, // 호스트 스키마 사용
  address: { type: addressSchema, required: true }, // 주소 스키마 사용
  availability: {
    availability_30: { type: Number, required: true },
    availability_60: { type: Number, required: true },
    availability_90: { type: Number, required: true },
    availability_365: { type: Number, required: true },
  },
  review_scores: { type: Object, default: {} }, // review_scores를 Object로 정의하고 기본값 추가
  reviews: { type: [reviewSchema], default: [] }, // 리뷰 배열
});

// Listing 모델 생성
const ListingAndReviews = mongoose.model('ListingAndReviews', listingSchema); // 모델 이름을 PascalCase로 유지

export default ListingAndReviews;
