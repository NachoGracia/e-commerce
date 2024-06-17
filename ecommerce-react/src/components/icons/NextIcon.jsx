import React from "react";
import "tailwindcss/tailwind.css";

const NextIcon = () => {
  return (
    <div className=" cursor-pointer hover:text-orange-500">
      <svg
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-200"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default NextIcon;
