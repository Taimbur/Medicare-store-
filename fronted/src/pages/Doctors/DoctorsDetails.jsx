import React from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "../SidePanel";
const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="mx-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="doctor" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Surgeon
                </span>
                <h4 className="text-headingColor text-[22px] leading-9 font-bold">
                  Sahil_khan
                </h4>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-1 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="star" /> 4.5
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400 text-textColor]">
                    (222)
                  </span>
                </div>
                <p className="text__para font-[400] text-[14px] leading-5 md:text-[15px] lg:max-w-[400px] capitalize mt-3">
                  loem lorem lorem loremsihah llahoha ljelai hdliaid slifhla.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]  lg:mt-[150px] sm:mt-[140px]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                className={`${
                  tab === "feedback" && "border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                onClick={() => setTab("feedback")}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
