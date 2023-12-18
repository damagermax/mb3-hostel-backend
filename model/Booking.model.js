import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: [true, "Please add an email"] },
    full_name: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    room: { type: mongoose.Types.ObjectId, required: true },
    school: { type: mongoose.Types.ObjectId, required: true },
    paid: { type: String, required: true },
    paid_at: { type: String, required: true },
    reference: { type: String, required: true },
    amount: { type: String, required: true },
    channel: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("booking", BookingSchema);
