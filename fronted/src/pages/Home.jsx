import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import videoImg from "../assets/images/video-icon.png";
import About from "../components/about";
import ServicesList from "../components/servicesList";
import avatarIcon from "../assets/images/avatar-icon.png";
import DoctorList from "../components/DoctorList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/FaqList";
import Testimonal from "../components/Testimonal";
 

const Home = () => {
  return (
    <>
      {/* ====hero section=== */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====hero content=== */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] capitalize">
                  we help patients live a healty, longer life
                </h1>

                <p className="text__para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi aut repellendus culpa. Libero, saepe porro deserunt
                  ipsam placeat eligendi nulla suscipit? Sint quae nostrum
                  veniam at eveniet labore officia deserunt.
                </p>
                <button className="btn  ">Request an appoinment</button>
              </div>

              {/* === hero counter=== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para capitalize">years of expirence</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    10+
                  </h2>
                  <span className="w-[100] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para capitalize">clinic location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para capitalize">years of expirence</p>
                </div>
              </div>
            </div>
            {/* ====hero content=== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="doctor"
                />
                <img className="w-full" src={heroImg03} alt="doctor" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====hero section end=== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center capitalize">
              providing the best medical services
            </h2>
            <p className="text__para text-center capitalize">
              world-class care for everyone. our health system offers unmatched,
              expert health care .
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-end justify-center">
                <img className="" src={icon1} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  find a doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center capitalize">
                  world-class care for everyone. our health system offers
                  unmatched, expert health care .
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-end justify-center">
                <img className="" src={icon2} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center capitalize">
                  world-class care for everyone. our health system offers
                  unmatched, expert health care .
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-end justify-center">
                <img className="" src={icon3} alt="doctor" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center capitalize">
                  book appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center capitalize">
                  world-class care for everyone. our health system offers
                  unmatched, expert health care .
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />

      {/* =============services section=============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto capitalize">
            <h2 className="heading text-center">our medical services</h2>
            <p className="text__para capitalize text-center mt-6">
              word class for everyone our health system offes cares unmatched
              expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* =============services section end=============== */}

      {/* =============feature section start =============== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* =============feature content =============== */}

            <div className="xl: w-[670px]">
              <h2 className="heading capitalize">
                get virtual teamtment <br />
                anytime.
              </h2>
              <ul className="pl-4 mt-3   ">
                <li className="text__para capitalize">
                  1. schedule the appoinment directly.
                </li>
                <li className="text__para">
                  2. Search for your phsician here, and contact their office.
                </li>
                <li className="text__para">
                  3. view our physician who are accepting new patient use the
                  online scheduling tool to select and appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn capitalize ">learn more</button>
              </Link>
            </div>

            {/* =============feature content end =============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="feature conent" className="w3/4" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-10 lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,24
                    </p>
                    <p className="text-[10px] leading-10 lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:px-[9px] lg:py-3">
                    <img src={videoImg} alt="icon" />
                  </span>
                </div>
                <div className="w-[65px] capitalize rounded-full lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-6 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                  consultation
                </div>
                <div className="flex items-center gap-6 lg:gap-10 mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="avatar" />
                  <h4 className="text-[10px]  leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-textColor capitalize ">
                    Sahil Khan
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============feature section end =============== */}
      {/* =============our doctor start =============== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center capitalize">
              our great doctors
            </h2>
            <p className="text-center text__para  capitalize">
              world class care for everyone. our health system offers unmatched
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* =============our doctor end =============== */}
      {/* =============faq doctor start =============== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="docotr" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading capitalize">
                most question by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =============faq doctor end =============== */}
      {/* =============testimonal start end =============== */}
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
      {/* =============testimonal start   =============== */}
    </>
  );
};

export default Home;
