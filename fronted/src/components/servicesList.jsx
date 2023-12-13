import React from "react";
import { services } from "../assets/data/services";
import ServicesCard from "./servicesCard";
const servicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-6 ">
      {services.map((items, index) => (
        <ServicesCard items={items} index={index} key={index} />
      ))}
    </div>
  );
};

export default servicesList;
