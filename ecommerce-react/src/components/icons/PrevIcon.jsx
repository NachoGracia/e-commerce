import React from "react";
import "tailwindcss/tailwind.css";

const PrevIcon = () => {
  return (
    <div className="cursor-pointer hover:text-orange-500">
      <svg
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-200"
      >
        <path
          d="M11 1 3 9l8 8"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PrevIcon;
