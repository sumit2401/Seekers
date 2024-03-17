// JobContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterJob, setFilterJob] = useState({
    company: [],
    location: [],
    datePosted: [],
    skills: [],
    experience: [],
    education: [],
  });

  const jobData = () => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((json) => setJobs(json));
  };

  useEffect(() => {
    jobData();
  }, []);

  const filteredJobs = searchInput
    ? jobs.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : jobs;

  return (
    <JobContext.Provider
      value={{ jobs, searchInput, setSearchInput, filteredJobs }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  return useContext(JobContext);
};
