import { Router } from "express";

import { verifyPaystackSignature } from "../middleware/paystack.middleware.js";
import { createBooking } from "../controller/booking.controller.js";

const bookingRouter = Router();

bookingRouter.route("/webhook/create").post(verifyPaystackSignature, createBooking);

export default bookingRouter;
