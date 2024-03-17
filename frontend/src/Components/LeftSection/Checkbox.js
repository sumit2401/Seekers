import React from "react";

const Checkbox = ({ labels }) => {
  return (
    <div className="space-y-3 mt-3">
      {labels.map((label, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox w-4 h-4 appearance-none bg-transparent border border-white rounded checked:bg-white "
          />
          <span className="text-white font-proxima">{label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
