import express from "express";
import {
  addRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  getRoomById,
  getPaginatedRooms,
} from "../controller/room.controller.js";

const roomRouter = express.Router();

roomRouter.route("/").get(getRooms).post(addRoom);

roomRouter.route("/user").get(getPaginatedRooms);

roomRouter.route("/:roomId").get(getRoomById).put(updateRoom).delete(deleteRoom);

export default roomRouter;
