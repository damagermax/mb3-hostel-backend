import { Router } from "express";

import { verifyPaystackSignature } from "../middleware/paystack.middleware.js";
import { createBooking, getAllBookings } from "../controller/booking.controller.js";

const bookingRouter = Router();

bookingRouter.route("/webhook/create").post(createBooking);

bookingRouter.route("/").get(getAllBookings);

export default bookingRouter;
