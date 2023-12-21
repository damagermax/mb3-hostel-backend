import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";

import Booking from "../model/Booking.model.js";

export const createBooking = asyncHandler(async (req, res) => {
  const {
    event,
    data: { amount, paid, paid_at, reference, channel, metadata },
  } = req.body;

  if (event == "charge.success") {
    await Booking.create({ paid, paid_at, amount, reference, channel, ...metadata });
  }

  res.sendStatus(200);
});

export const getAllBookings = asyncHandler(async (req, res) => {
  const allBooking = await Booking.find();
  res.json({ success: true, bookings: allBooking, count: allBooking.length });
});
