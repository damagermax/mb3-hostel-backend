import asyncHandler from "../middleware/asyncHandler.js";

import Room from "../model/Room.model.js";

import ErrorResponse from "../utils/errorResponse.js";

export const addRoom = asyncHandler(async (req, res) => {
  const { number, price, floor, type, gender, bed_left } = req.body;

  const newRoom = await Room.create({
    number,
    price,
    floor,
    type,
    bed_left,
    gender,
  });

  res.status(201).json({ success: true, room: newRoom });
});

export const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find().sort({ number: 1 });
  res.json({ success: true, count: rooms.length, rooms });
});

export const getRoomById = asyncHandler(async (req, res) => {
  const { roomId } = req.params;

  const room = await checkRoomExistence(roomId);

  if (room.bed_left == 0) throw new ErrorResponse("Room is fully booked");

  res.json({ success: true, room });
});

export const getPaginatedRooms = asyncHandler(async (req, res) => {
  let { page = 1, limit = 12 } = req.query;

  page <= 1 && (page = 1);

  const rooms = await Room.find({ bed_left: { $gt: 0 } })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ number: 1 });

  const count = await Room.countDocuments();

  res.json({
    success: true,
    count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    rooms,
  });
});

export const updateRoom = asyncHandler(async (req, res) => {
  const { number, price, floor, type, gender } = req.body;
  const { roomId } = req.params;

  await checkRoomExistence(roomId);

  const matches = type.match(/\d+/);
  const bedCount = parseInt(matches[0], 10);

  const updateRoom = await Room.findByIdAndUpdate(
    roomId,
    {
      number,
      price,
      floor,
      gender,
      type,
      bed_left: bedCount,
      number_of_bed: bedCount,
    },
    {
      new: true,
    }
  );

  res.json({ success: true, room: updateRoom });
});

export const deleteRoom = asyncHandler(async (req, res) => {
  const { roomId } = req.params;

  const room = await checkRoomExistence(roomId);
  await room.deleteOne();

  res.json({ success: true, message: `${room.number} deleted  successfully` });
});

const checkRoomExistence = async (id) => {
  const room = await Room.findById(id);

  if (!room) throw new ErrorResponse("Room not found", 404);

  return room;
};
