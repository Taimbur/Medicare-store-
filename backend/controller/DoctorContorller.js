import Booking from "../models/BookingSchemas.js";
import Doctor from "../models/DoctorShemas.js";

//update
export const UpadteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const UpadteDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated ",
      data: UpadteDoctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "update failed" });
  }
};
//getsingleDoctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleDoctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    res.status(200).json({
      success: true,
      message: "successfully  found Doctor",
      data: getSingleDoctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};
//delete
export const DeleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const DeleteDoctor = await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully Deleted Doctor ",
      data: DeleteDoctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "unable to delete" });
  }
};
//find all Doctors
export const allDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }
    // const allDoctors = await Doctor.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "successfully  found all Doctor",
      data: doctors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

export const getDoctoProfile = async (req, res) => {
  const doctorId = req.UserId;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const { password, ...rest } = doctor._doc;
    const appointment = await Booking.find({ doctor: doctorId });
    res.status(200).json({
      success: success,
      message: "profile info getting data",
      data: { ...rest, appointment },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong master sahil" });
  }
};
