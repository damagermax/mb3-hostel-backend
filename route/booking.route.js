import { Router } from "express";

import { createBooking, getAllBookings } from "../controller/booking.controller.js";

import { verifyPaystackSignature, verifyPayment } from "../middleware/paystack.middleware.js";

const bookingRouter = Router();

bookingRouter.route("/webhook").post(verifyPayment, createBooking);

bookingRouter.route("/").get(getAllBookings);

export default bookingRouter;
