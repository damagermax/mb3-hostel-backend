import express from "express";

import roomRouter from "./room.route.js";

const router = express.Router();

//router.use("/auth");
router.use("/room", roomRouter);

export default router;
