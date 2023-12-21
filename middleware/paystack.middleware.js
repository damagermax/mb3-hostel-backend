import crypto from "crypto";

import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";

export const verifyPaystackSignature = (req, res, next) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  const hashKey = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");

  if (hashKey == req.headers["x-paystack-signature"]) {
    next();
  } else {
    throw new ErrorResponse("Unauthorized", 401);
  }
};

export const verifyPayment = asyncHandler(async (req, res, next) => {
  next();
});
