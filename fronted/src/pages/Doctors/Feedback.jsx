import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../assets/utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
const Feedback = () => {
  const [feedback, setFeedback] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-8 font-bold text-headingColor mb-8">
          All Reviews(887)
        </h4>
        <div className="flex justify-between gap-10 mb-8">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="avatar" className="w-full" />
            </figure>

            <div className="">
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold capitalize">
                sahil
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("02-02-2019")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px] capitalize ">
                good services, highly recommended 👍
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn" onClick={() => setFeedback(true)}>
          Give Feedback
        </button>
      </div>
      {!feedback && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
