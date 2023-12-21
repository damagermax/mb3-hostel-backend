import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: [true, "Please add an email"] },
    full_name: { type: String, required: true },
    gender: { type: String, required: true },
    number: { type: String, required: true },
    room: { type: mongoose.Types.ObjectId, required: true },
    school: { type: String, required: true },
    paid_at: { type: String, required: true },
    reference: { type: String, required: true },
    amount: { type: String, required: true },
    channel: { type: String, required: true },
    guardian_name: { type: String, required: true },
    guardian_number: { type: String, required: true },
  },
  { timestamps: true }
);

bookingSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model("booking", bookingSchema);
