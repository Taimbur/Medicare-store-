import React from "react";
import starIcon from "../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    hospital,
    totalPatients,
    specialty,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="phtots" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[25px] lg:leading-9 text-textColor font-[700] mt-3 capitalize lg:mt-6 ">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] rounded lg:text-[16px] lg:leading-7 font-semibold ">
          {" "}
          {specialty}
        </span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-headingColor text-[14px] leading-6 lg:text-[16px] font font-semibold">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span>({totalRating})</span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between capitalize">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-9 font-semibold">
            +{totalPatients}patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {hospital}
          </p>
        </div>
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
