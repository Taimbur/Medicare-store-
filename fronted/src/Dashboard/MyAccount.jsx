import { useContext, useState } from "react";

import { authContext } from "../context/AuthContext";
import MyBooking from "./MyBooking";

import Profile from "./Profile";
import getUserProfile from "../hooks/useFetchData";

import Loading from "../Loader/Loading";
import { BASE_URL } from "../config";

import Error from "../Loader/Error";

const MyAccount = () => {
  const [tab, setTab] = useState();
  const { dispatch } = useContext(authContext);
  const idof = localStorage.getItem("user");

  const {
    data: userData,
    loading,
    err,
  } = getUserProfile(`${BASE_URL}/users/${JSON.parse(idof)["_id"]}`);

  const HandleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="max-w-[1170px] px-5 mx-auto mt-8">
      {loading && <Loading />}
      {err && <Error errMessage={err} />}
      {!loading && !err && (
        <div className="grid md:grid-cols-3 gap-10">
          <div className="pb-[50px] px-6 rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor ">
                <img
                  src={userData.photo}
                  alt="img"
                  className="h-full w-full rounded-full"
                />
              </figure>
            </div>
            <div className="text-center">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData.name}{" "}
              </h3>
              <p className="text-textColor text-[15px] leading-6 font-medium">
                {userData.fullname}{" "}
                <span className="ml-2 text-headingColor text-[22px] leading-8">
                  {userData.bloodType}{" "}
                </span>
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button
                className="w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white"
                onClick={HandleLogout}
              >
                Logout
              </button>

              <button className="w-full bg-red-600 p-3 mt-4 text-[16px] leading-7 rounded-md text-white">
                Delete Account
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:px-[30px]">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab === "bookings" && "bg-primaryColor text-white font-normal"
                } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                My Booking
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings" && "bg-primaryColor text-white font-normal"
                } p-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Setting
              </button>
            </div>
            {tab === "bookings" && <MyBooking />}
            {tab === "settings" && <Profile user={userData} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
