import express from "express";
import {
  getSingleDoctor,
  DeleteDoctor,
  allDoctors,
  UpadteDoctor,
  getDoctoProfile,
} from "../controller/DoctorContorller.js";
import { authenticate, restrict } from "../tokenSystem/VerifyToken.js";
import { createReview } from "../controller/ReviewController.js";
const router = express.Router();

// nested router begin here
router.use("/:doctorId/reviews", createReview);
router.get("/", allDoctors);
router.get("/:id", getSingleDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), DeleteDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), UpadteDoctor);
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctoProfile);

export default router;
