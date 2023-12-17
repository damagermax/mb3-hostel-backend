import { Router } from "express";

import { createBooking } from "../controller/booking.controller.js";

const bookingRouter = Router();

bookingRouter.route("/webhook/create").post(createBooking);

export default bookingRouter;
