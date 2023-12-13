import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudnary from "../assets/utils/uploadCloudnary";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { BASE_URL, token } from "../config";

const Profile = ({ user }) => {
  const [selectFile, setSelectFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formDate, setFormDate] = useState({
    fullname: "",
    email: "",
    photo: "null",
    password: "",
    gender: "",
    bloodType: "",
  });
  const navi = useNavigate();

  useEffect(() => {
    setFormDate({
      fullname: user.fullname,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = (e) => {
    e.preventDefault();

    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudnary(file);
    setPreviewUrl(data.url);
    setSelectFile(data.url);
    setFormDate({ ...formDate, photo: data.url });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formDate),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navi("/users/profile/me");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 md:mt-5">
      <form className="mb-5" onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            name="fullname"
            placeholder="Enter you full name"
            value={formDate.fullname}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            value={formDate.email}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="{Enter you password}"
            value={formDate.password}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="blood"
            placeholder="blood Type"
            value={formDate.bloodType}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
          />
        </div>
        <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
          </label>
          <select
            value={formDate.gender}
            onChange={handleInputChange}
            name="gender"
            className="text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
          >
            <option value=" ">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formDate.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formDate.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileChange}
              accept="jpg,.png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-7">
          <button
            disabled={loading && true}
            className="btn w-full  text-[18px] leading-8 rounded-lg px-4 py-3"
            type="submit"
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : " Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
