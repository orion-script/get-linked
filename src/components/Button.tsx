import React from "react";

function Button({ text }) {
  return (
    <button className="w-[150px] h-[45px] rounded-[4px] bg-gradient-to-r from-[#FF26B9] via-[#d434fe] to-[#903aff] text-[16px] font-normal text-white">
      {text}
    </button>
  );
}
export default Button;
