import express from "express";
import { authenticate, restrict } from "../tokenSystem/VerifyToken.js";
import { createReview, getAllReviews } from "../controller/ReviewController.js";
const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
