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

RoomSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model("room", RoomSchema);
