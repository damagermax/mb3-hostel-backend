import asyncHandler from "../middleware/asyncHandler.js";
import crypto from "crypto";

import ErrorResponse from "../utils/errorResponse.js";

export const createBooking = asyncHandler(async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  console.log("\n======================================WEBHOOK==========================");

  const hash = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    // Retrieve the request's body
    const event = req.body;
    console.log(event);

    // Do something with event
  }

  // Do something with event
  res.send(200);
});
