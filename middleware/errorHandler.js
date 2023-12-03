import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  let message = err.message || "Server error";

  if (err.name === "CastError") {
    message = `Resource with the given id ${err.value} does not exist`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    message = "Duplicate field value entered";
    err = new ErrorResponse(message, 400);
  }

  console.log(err.message);
  res.status(error.statusCode || 500).json({ success: false, message });
};

export default errorHandler;
