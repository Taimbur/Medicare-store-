import express from "express";
import {
  getSingleUser,
  DeleteUser,
  allUsers,
  upadteUser,
  getMyAppointment,
  getUserProfile,
} from "../controller/UserController.js";
import { authenticate, restrict } from "../tokenSystem/VerifyToken.js";
const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), allUsers);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.delete("/:id", authenticate, restrict(["patient"]), DeleteUser);
router.put("/:id", authenticate, restrict(["patient"]), upadteUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "appointments/my-appointments/:id",
  authenticate,
  restrict(["patient"]),
  getMyAppointment
);

export default router;
