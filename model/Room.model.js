import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: [true, "Room already exist"] },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    floor: { type: String, required: true },
    bed_left: { type: Number, min: 0 },
    gender: { type: String, enum: ["male", "female"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("room", RoomSchema);
