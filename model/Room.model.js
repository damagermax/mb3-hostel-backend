import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: [true, "Room already exist"] },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    floor: { type: String, required: true },
    number_of_bed: { type: Number, min: 0 },
    bed_left: { type: Number, min: 0 },
    gender: { type: String, enum: ["male", "female"], required: true },
  },
  { timestamps: true }
);

roomSchema.pre("save", function (next) {
  // Extract the first number using a regular expression
  const matches = this.type.match(/\d+/);

  if (matches && matches.length > 0) {
    const bedCount = parseInt(matches[0], 10);
    this.number_of_bed = bedCount;
    this.bed_left = bedCount;
  }

  next();
});

roomSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default mongoose.model("room", roomSchema);
