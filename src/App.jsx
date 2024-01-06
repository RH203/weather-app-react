import React from "react";
import { MainWeather, SecondWeather } from "./views";

const App = () => {
  return (
    <div className="flex justify-center items-center m-0 p-0 box-border w-full h-screen bg-slate-500">
      <div className="bg-slate-400 w-[300px] h-[500px] rounded-l-md drop-shadow-2xl">
        <MainWeather />
      </div>
      <div className="bg-slate-200 w-[600px] h-[500px] rounded-r-md drop-shadow-2xl">
        <SecondWeather />
      </div>
    </div>
  );
};

export default App;
