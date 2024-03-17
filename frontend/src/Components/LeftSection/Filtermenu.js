import React from "react";
import Checkbox from "./Checkbox";

//creating an array for fetching category and labels from here
const filterOptions = [
  { category: "Company", labels: ["Amazon", "CVS Health", "Toyota", "Apple"] },
  {
    category: "Location",
    labels: ["Mumbai", "Chandigarh", "Karnataka", "Bangalore"],
  },
  {
    category: "Date Posted",
    labels: [
      "Last 24 hours",
      "Last 48 hours",
      "Last 7 days",
      "Last 14 days",
      "Last month",
    ],
  },
  {
    category: "Salary Range",
    labels: ["3 Lakh+", "6 Lakh+", "10 Lakh+", "15 Lakh+", "25 Lakh+"],
  },
  {
    category: "Skills",
    labels: [
      "Javascript",
      "Machine Learning",
      "JQuery",
      "Artificial Intelligence",
    ],
  },
  {
    category: "Experience",
    labels: ["0-2 years", "3-5 years", "5-8 years", "Above 8 years"],
  },
  { category: "Education", labels: ["Bachelors", "Masters", "PhD", "Diploma"] },
];

const FilterMenu = () => {
  return (
    <div className="mt-5 ml-10 h-auto w-72 bg-gray-900 p-4 rounded-md shadow-xl overflow-y-auto">
      <div className="space-y-4">
        {filterOptions.map(({ category, labels }, index) => (
          <div key={index}>
            <p className="text-gray-300">{category}</p>
            <Checkbox labels={labels} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
