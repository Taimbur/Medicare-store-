import React from "react";
import { BASE_URL } from "../config";
import DoctorCard from "../components/DoctorCard";

import Loading from "../Loader/Loading";
import Error from "../Loader/Error";
import useFetchData from "../hooks/useFetchData";

const MyBooking = () => {
  const idof = localStorage.getItem("user");

  const {
    data: appointment,
    loading,
    err,
  } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments/${JSON.parse(idof)["_id"]}`
  );
  return (
    <div>
      {loading && !err && <Loading />}
      {err && !loading && "Under Construction"}
      {appointment.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))}
      {!loading && !err && appointment.length === 0 && (
        <h2 className="mt-5 leading-7 text-[20px] font-semibold text-primaryColor">
          you did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBooking;
