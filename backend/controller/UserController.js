import User from "../models/UserShemas.js";
import Booking from "../models/BookingSchemas.js";
import Doctor from "../models/DoctorShemas.js";
//update
export const upadteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated ",
      data: updateUser,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "update failed" });
  }
};
//getsingleuser
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleUser = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "successfully  found user",
      data: getSingleUser,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};
//delete
export const DeleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const DeleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "successfully Deleted User ",
      data: DeleteUser,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "unable to delete" });
  }
};
//find all users
export const allUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "successfully  found all user",
      data: allUsers,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

export const getUserProfile = async (req, res) => {
  const UserId = req.UserId;

  try {
    const user = await User.findById(UserId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const { password, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "profile info getting data",
      data: { ...rest },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong master sahil" });
  }
};

export const getMyAppointment = async (req, res) => {
  const id = req.params.id;
  try {
    // step 1 get appointment from booking for specefic user
    const booking = await Booking.find(id);

    // step 2 exteact dotors ids form appointments booking
    const doctorIds = booking.map((el) => el.doctor.id);
    // step 3 retrieve doctors using doctors ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res.status(200).json({
      success: true,
      message: "appointments are getting...",
      data: doctors,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong..." });
  }
};
