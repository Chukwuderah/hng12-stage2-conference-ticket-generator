import React from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-[97%] mx-auto my-[30px] border border-[#197686] rounded-[10px] p-2 bg-[#05252C] flex justify-between items-center">
        <img src={logo} alt="logo" className="w-auto h-auto" />
        <ul className="hidden md:flex gap-5 jeju text-[#B3B3B3]">
          <li>
            <a
              href=""
              className="hover:text-white transition-colors duration-300"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-white transition-colors duration-300"
            >
              My Tickets
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-white transition-colors duration-300"
            >
              About Project
            </a>
          </li>
        </ul>

        <button className="rounded px-4 py-2 bg-white text-black jeju flex gap-2.5 items-center">
          MY TICKETS{" "}
          <svg
            width="17"
            height="8"
            viewBox="0 0 17 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 3.5C0.223858 3.5 0 3.72386 0 4C0 4.27614 0.223858 4.5 0.5 4.5V3.5ZM16.8536 4.35355C17.0488 4.15829 17.0488 3.84171 16.8536 3.64645L13.6716 0.464466C13.4763 0.269204 13.1597 0.269204 12.9645 0.464466C12.7692 0.659728 12.7692 0.976311 12.9645 1.17157L15.7929 4L12.9645 6.82843C12.7692 7.02369 12.7692 7.34027 12.9645 7.53553C13.1597 7.7308 13.4763 7.7308 13.6716 7.53553L16.8536 4.35355ZM0.5 4.5L16.5 4.5V3.5L0.5 3.5V4.5Z"
              fill="#0A0C11"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
