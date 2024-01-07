import React from "react";

const ButtonTodaySecond = () => {
  return (
    <div className="flex">
      <button className="font-Ubuntu text-slate-800 font-bold relative hover:before:opacity-100 before:absolute before:inset-x-0 before:bottom-0 before:h-[0.5px] before:bg-black before:opacity-0 before:transition-opacity before:duration-300">
        Today
      </button>
    </div>
  );
};

export default ButtonTodaySecond;
