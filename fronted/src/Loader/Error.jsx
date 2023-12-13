import React from "react";

const Error = ({ errMessage }) => {
  return (
    <div className="flex items-center justify-center w-full h-full font-semibold">
      <h3 className="text-headingColor text-[20px] leading-8 font-semibold">
        {errMessage}
      </h3>
    </div>
  );
};

export default Error;
