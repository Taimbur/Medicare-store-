import React from "react";
import { formatDate } from "../../assets/utils/formateDate";
const DoctorAbout = () => {
  return (
    <div className="container">
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          About Of
          <span className="text-irisBlueColor font-semibold text-[24px] leading-9  mx-2">
            Sahil khan
          </span>
        </h3>

        <p className="text__para capitalize">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quos
          eligendi temporibus at omnis, similique fugiat aliquam harum hic
          magnam maiores maxime. Corrupti dolores unde nam enim! Modi,
          reprehenderit voluptatum! Et, ipsum aut debitis veniam magnam ipsa
          sequi nobis corrupti obcaecati nihil eligendi amet incidunt quis
          officiis qui repellat enim accusantium laboriosam sint. Odio pariatur
          dignissimos corrupti accusamus autem dolore?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-8 text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row  sm:justify-between sm:items-end md:gap-5 mb-8">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6">
                {formatDate("1-03-2022")} -{formatDate("12-03-2023")}{" "}
              </span>
              <p className="text-[16px] leading-6 capitalize text-textColor font-medium">
                pHD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 capitalize text-textColor font-medium">
              New jamia hamdard | new delhi india{" "}
            </p>
          </li>

          <li className="flex flex-col sm:flex-row  sm:justify-between sm:items-end md:gap-5 mb-8">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6">
                {formatDate("12-03-2020")} -{formatDate("11-11-2023")}{" "}
              </span>
              <p className="text-[16px] leading-6 capitalize text-textColor font-medium">
                pHD in surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 capitalize text-textColor font-medium">
              New jamia hamdard | new delhi india{" "}
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-8 text-headingColor md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("7-07-2020")} -{formatDate("12-03-2021")}
            </span>
            <p className="text-[16px] leading-5 capitalize text-textColor font-medium">
              Sr. Surgeon{" "}
            </p>
            <p className="text-[14px] leading-5 capitalize text-textColor font-medium">
              New jamia hamdard | new delhi india{" "}
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("7-07-2020")} -{formatDate("12-03-2021")}
            </span>
            <p className="text-[16px] leading-5 capitalize text-textColor font-medium">
              Sr. Surgeon{" "}
            </p>
            <p className="text-[14px] leading-5 capitalize text-textColor font-medium">
              New jamia hamdard | new delhi india{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
