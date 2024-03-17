import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import fullcircle from "../../Assets/Ellipse 1497.png";
import rotatecircle from "../../Assets/Ellipse 1498.png";

const Joblisting = ({ title, company, location, dateposted, image }) => {
  return (
    <div className="bg-slate-700 rounded-lg shadow-md mt-6 mb-4 overflow-hidden">
      {/* Section 1 */}
      <div className="flex justify-between  p-6 text-white">
        <div className="flex gap-7">
          {" "}
          <img
            className="bg-white rounded-3xl w-20 h-20 p-2"
            src={image}
            alt=""
          />
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-gray-400">{company}</p>
            <p className="text-gray-400">{location}</p>
          </div>
        </div>

        <div className="ml-72 center ">
          <p className="self-end">Skill match:</p>
          <div className="relative flex flex-col items-start ">
            <img src={fullcircle} alt="" className="absolute top-0 left-0" />
            <img
              src={rotatecircle}
              alt=""
              className="absolute top-0 left-0.5"
            />
            <span className="absolute top-5 left-5 z-10">78%</span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex justify-between bg-slate-600 text-white p-4">
        <p className="flex items-center">
          Posted {dateposted}
          <FontAwesomeIcon
            className="w-1 h-1 m-2 text-white mx-1"
            icon={faCircle}
          />
          10 applicants
        </p>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Joblisting;
