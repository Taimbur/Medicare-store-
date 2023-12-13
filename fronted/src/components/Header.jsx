import React, { useEffect, useRef, useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "home",
  },
  {
    path: "/doctors",
    display: "find a Doctor",
  },
  {
    path: "/services",
    display: "services",
  },
  {
    path: "/contact",
    display: "contact",
  },
];
const Header = () => {
  const headRef = useRef(null);
  const menuRef = useRef(null);

  const { user, token, role } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headRef.current.classList.add("sticky_header");
      } else {
        headRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headRef}>
      <div className="container">
        <div className="flex items-center justify-between capitalize">
          {/* logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((links, index) => (
                <li key={index}>
                  <NavLink
                    to={links.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {links.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* =====nav right side ====*/}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure>
                    <img
                      src={user?.photo}
                      className="w-[35px] h-[35px] rounded-full cursor-pointer"
                    />
                  </figure>
                  <h2>{user?.name}</h2>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
