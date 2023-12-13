import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/Auth.js";
import userRoutes from "./routes/User.js";
import doctorRoutes from "./routes/Doctor.js";
import reviewRoutes from "./routes/Review.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
};
//middlesware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use(cookieParser());

// routes middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/doctors", doctorRoutes);
app.use("/api/v1/reviews", reviewRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//connect db server
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONOGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log("db not connected");
  }
};

app.listen(port, () => {
  connectDB();
  console.log(`server running on port ${port}`);
});
