import crypto from "crypto";
import ErrorResponse from "../utils/errorResponse.js";

export const verifyPaystackSignature = (req, res, next) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  const hash = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");

  if (hash == req.headers["x-paystack-signature"]) {
    next();
  } else {
    throw new ErrorResponse("Unauthorized", 401);
  }
};
