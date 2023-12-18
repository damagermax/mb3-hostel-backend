import asyncHandler from "../middleware/asyncHandler.js";

import Booking from "../model/Booking.model.js";

import ErrorResponse from "../utils/errorResponse.js";

export const createBooking = asyncHandler(async (req, res) => {
  console.log("\n======================================WEBHOOK==========================");

  const {
    event,
    amount,
    data: { paid, paid_at, reference, channel, metadata },
  } = req.body;

  if (event == "charge.success") {
    console.log(`${metadata}`);
    await Booking.create({ paid, paid_at, amount, reference, channel, ...metadata });
  }

  res.sendStatus(200);
});
