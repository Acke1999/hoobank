import React from "react";

const Button = ({ styles, title }) => {
  return (
    <button
      type="button"
      className={`${styles} bg-blue-gradient text-[18px] text-primary py-4 px-6 font-medium font-poppins outline-none rounded-[5px] hover:opacity-90`}
    >
      {title}
    </button>
  );
};

export default Button;
