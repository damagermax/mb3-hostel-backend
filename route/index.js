import { Router } from "express";

import roomRouter from "./room.route.js";
import bookingRouter from "./booking.route.js";

const router = Router();

//router.use("/auth");
router.use("/room", roomRouter);
router.use("/booking", bookingRouter);

export default router;
