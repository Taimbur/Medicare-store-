import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/DoctorCard";
import Testimonal from "../../components/Testimonal";
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctors</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              name="search"
              id="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn rounded-[0px] rounded-r-md mt-0">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[30px] lg:mt-[55px] lg:gap-[30px]">
            {doctors.map((item, index) => (
              <DoctorCard key={index} index={index} doctor={item} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center capitalize">
              what our patient say{" "}
            </h2>
            <p className="text-center text__para  capitalize">
              world class care for everyone. our health system offers unmatched
              expert health care.
            </p>
          </div>
          <Testimonal />
        </div>
      </section>
    </>
  );
};

export default Doctors;
