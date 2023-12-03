import asyncHandler from "../middleware/asyncHandler.js";

import Room from "../model/Room.model.js";

import ErrorResponse from "../utils/errorResponse.js";

export const addRoom = asyncHandler(async (req, res) => {
  const { number, price, floor, type, gender, bed_left } = req.body;

  const newRoom = await Room.create({ number, price, floor, type, bed_left, gender });

  res.status(201).json({ success: true, room: newRoom });
});

export const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find();
  res.json({ success: true, count: rooms.length, rooms });
});

export const updateRoom = asyncHandler(async (req, res) => {
  const roomId = req.params.id;
  const room = await checkRoomExistence(roomId);

  const { number, price, floor, type, gender } = req.body;
  const { number: currentNumber, price: currentPrice, floor: currentFloor, type: currentType, gender: currentGender } = room;

  const updatedFields = {
    number: number !== undefined ? number : currentNumber,
    price: price !== undefined ? price : currentPrice,
    floor: floor !== undefined ? floor : currentFloor,
    gender: gender !== undefined ? gender : currentGender,
    type: type !== undefined ? type : currentType,
  };

  const updateRoom = await Room.findByIdAndUpdate(roomId, updatedFields, { new: true });

  res.json({ success: true, room: updateRoom });
});

export const deleteRoom = asyncHandler(async (req, res) => {
  const roomId = req.params.id;

  const room = await checkRoomExistence(roomId);
  await room.deleteOne();

  res.json({ success: true, message: `${room.number} deleted  successfully` });
});

const checkRoomExistence = async (id) => {
  const room = await Room.findById(id);

  if (!room) throw new ErrorResponse("Room not found", 404);

  return room;
};
