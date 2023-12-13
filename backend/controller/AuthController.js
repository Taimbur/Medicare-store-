import User from "../models/UserShemas.js";
import Doctor from "../models/DoctorShemas.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (user) => {
  return Jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "10d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, fullname, role, photo, gender } = req.body;
  try {
    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email });
    } else {
      if (role === "doctor") {
        user = await Doctor.findOne({ email });
      }
    }
    //check if user exist
    if (user) {
      return res.status(400).json({ message: "user already exist " });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        fullname,
        email,
        password: hashPassword,
        photo,
        role,
        gender,
      });
    }
    if (role === "doctor") {
      user = new Doctor({
        fullname,
        email,
        password: hashPassword,
        photo,
        role,
        gender,
      });
    }

    await user.save();
    res
      .status(200)
      .json({ success: true, message: "user created successfully " });
  } catch (err) {
    res
      .status(404)
      .json({ success: false, message: "kuch to gadbad  ha re baba" });
  }
};
//login

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;
    const patient = await User.findOne({ email });
    const doctor = await User.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    //check user if exits
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    //compare password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ status: false, message: "password not found" });
    }
    //token
    const token = generateToken(user);
    const { password, role, appoinments, ...rest } = user._doc;
    res.status(200).json({
      status: true,
      message: "successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "failed to login" });
  }
};
