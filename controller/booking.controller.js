import asyncHandler from "../middleware/asyncHandler.js";

import Booking from "../model/Booking.model.js";

import ErrorResponse from "../utils/errorResponse.js";

export const createBooking = asyncHandler(async (req, res) => {
  console.log("\n======================================WEBHOOK==========================");

  await Booking.create({ email: "m11111w@gmail.com", room_number: "30", full_name: "hermes" });

  res.send(200);
});
