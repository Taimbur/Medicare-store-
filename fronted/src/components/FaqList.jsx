import React from "react";
import { faqs } from "../assets/data/faqs";
import FaqCard from "./FaqCard";

const FaqList = () => {
  return (
    <div className="mt-[40px]">
      {faqs.map((items, index) => (
        <FaqCard key={index} item={items} />
      ))}
    </div>
  );
};

export default FaqList;
