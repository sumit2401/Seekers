// Jobdes.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Joblisting from "./Joblisting";
import { useJobContext } from "../../JobContext";

const Jobdes = () => {
  const { filteredJobs } = useJobContext();

  return (
    <div className=" mt-5 ">
      <div className="flex justify-between gap-96">
        <div>
          <h2 className="text-white text-sm">
            <span className="px-2 text-sm font-extrabold font-mono">
              SEARCH RESULTS
            </span>
            /JOBS-2049
          </h2>
        </div>
        <div className="flex justify-between gap-4 ml-96 px-55">
          <h2 className="text-white">Sort by</h2>
          <div className="flex gap-1 px-2 bg-white h-7 rounded-md">
            <p className="mx-2">Latest</p>
            <FontAwesomeIcon
              className="mt-0.5"
              icon={faSortDown}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {filteredJobs.map((job) => (
        <Joblisting key={job.id} {...job} />
      ))}
    </div>
  );
};

export default Jobdes;
