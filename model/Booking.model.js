import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: [true, "Please add an email"] },
    room_number: { type: String, required: true },
    full_name: { type: String, required: true },
  },
  { timestamps: true }
);
