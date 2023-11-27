import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 160,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    discountPercentage: {
      type: Number,
      required: [true, "Please Enter product Discount Percentage"],
    },
    rating: {
      type: Number,
      required: [true, "Please Enter product Rating"],
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
      required: [true, "Please Enter brand Name"],
      trim: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    images: [
      {
          type: String,
          required: false,
    }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
