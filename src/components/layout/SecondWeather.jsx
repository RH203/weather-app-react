import SearchBar from "./SearchBar";
import WeatherDetail from "./WeatherDetail";
import WeatherWeek from "./WeatherWeek";

const SecondWeather = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-row mt-2 justify-end items-end">
        <SearchBar />
      </div>

      <div className="w-full flex justify-center flex-wrap mx-auto gap-1 mt-20 ">
        <WeatherWeek/>
      </div>

      <div className="w-full flex justify-center flex-wrap mx-auto gap-1 mt-5">
        <WeatherDetail/>
      </div>
    </div>
  );
};

export default SecondWeather;
