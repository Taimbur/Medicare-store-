import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navi = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });
      console.log(result, "login data");
      setLoading(false);
      toast.success(result.message);
      navi("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md  md:p-10 mb-[150px]">
      <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
        Hello <span className="text-primaryColor">Welcome</span> Back 🎉
      </h3>
      <form className="py-4 md:px-0" onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Enter you email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Enter you password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border py-3 px-1  border-b border-solid border-[#0066ff61] focus:outline-none  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer "
            required
          />
        </div>
        <div className="mt-7">
          <button className="btn w-full  text-[18px] leading-8 rounded-lg px-4 py-3">
            {loading ? <HashLoader size={25} color="#fff" /> : " Login"}
          </button>
        </div>
        <p className="mt-5 text-textColor text-center ">
          dont‵ t have an account ?{" "}
          <Link to="/register" className="text-primaryColor">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
