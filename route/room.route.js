import express from "express";
import { addRoom, getRooms, updateRoom, deleteRoom } from "../controller/room.controller.js";

const roomRouter = express.Router();

roomRouter.get("/", getRooms);
roomRouter.post("/add", addRoom);
roomRouter.put("/:id/update", updateRoom);
roomRouter.delete("/:id/delete", deleteRoom);

export default roomRouter;
