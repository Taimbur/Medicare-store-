import Review from "../models/ReviewSchemas.js";
import Doctor from "../models/DoctorShemas.js";

export const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find({});
    res.status(200).json({
      success: true,
      message: "successfully  found reviews",
      data: review,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "review not found",
    });
  }
};

// create review
export const createReview = async (req, res) => {
  if (!req.body.Doctor) req.body.Doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "Reviews submitted",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
