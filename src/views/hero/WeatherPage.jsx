import { MainWeather, SecondWeather } from "../../components";

const WeatherPage = () => {
  return (
    <div className="w-[1200px] h-[600px] flex flex-row mt-5 mx-auto justify-center items-center gap-0.5 backdrop-blur-sm bg-black/30 rounded-md">
      <div className="w-1/3 h-[90%] bg-slate-700 rounded-md">
        <MainWeather />
      </div>
      <div className="w-3/5 h-[90%] bg-slate-500 rounded-md flex justify-end">
        <SecondWeather />
      </div>

    </div>
  );
};

export default WeatherPage;
