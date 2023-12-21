import express from "express";
import {
  addRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  getRoomById,
  getAvailableRooms,
} from "../controller/room.controller.js";

const roomRouter = express.Router();

roomRouter.route("/").get(getRooms).post(addRoom);

roomRouter.route("/available").get(getAvailableRooms);

roomRouter.route("/:roomId").get(getRoomById).put(updateRoom).delete(deleteRoom);

export default roomRouter;
