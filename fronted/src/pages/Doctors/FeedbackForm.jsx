import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReviewText = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 ">
          How would you rate the overall experience ?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                className={`${
                  index < ((rating && hover) || hover)
                    ? "text-yellowColor "
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 ">
            Share you feedback or suggestions *
          </h3>
          <textarea
            name=""
            id=""
            className="border border-solid border-[#0066ff34]  focus:outline outline-primaryColor w-full rounded px-3 py-3 "
            rows="5"
            placeholder="write you message"
          ></textarea>
        </div>
        <button type="submit" className="btn" onClick={handleSubmitReviewText}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
