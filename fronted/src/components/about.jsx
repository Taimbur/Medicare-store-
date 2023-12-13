import React from "react";
import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <section>
      <div className="container">
        <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* =====about img====== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="about" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="about" />
            </div>
          </div>
          {/* ====about content=== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
            <h2 className="heading capitalize">
              proud to be one of the nations best
            </h2>
            <p className="text__para capitalize lg: mt-4">
              for 2 years in a row, us news & world report has recognized us as
              one of the best publics hospitlas in the nations and #1 in florida
              lorem lorem lorem lorem .
            </p>
            <p className="text__para capitalize lg:mt-4">
              our best is something we strive for each day, caring for our
              patients-not looking bact at what we accomplised but towards what
              we can do tomorrw. providing the best. Lorem
            </p>
            <Link>
              <button className="btn capitalize">learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
