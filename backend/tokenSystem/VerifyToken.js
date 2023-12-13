import jwt from "jsonwebtoken";
import DoctorShemas from "../models/DoctorShemas.js";
import UserShemas from "../models/UserShemas.js";

export const authenticate = async (req, res, next) => {
  // get toekn form header
  const authToken = req.headers.authorization;

  // checking token is exits
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "no token,authroization denied" });
  }
  try {
    const token = authToken.split(" ")[1];
    // verifytoken
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "token is expired master ji" });
    }
    return res
      .status(401)
      .json({ success: false, message: "token is invalid" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const UserId = req.userId;
  let user;
  const patient = await UserShemas.findById(UserId);
  const doctor = await DoctorShemas.findById(UserId);

  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = patient;
  }
  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "Your are not authorized" });
  }
  next();
};
