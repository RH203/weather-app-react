import { MainWeather, SecondWeather } from "../../components";

const WeatherPage = () => {
  return (
    <div className="bg-neutral-400 h-full w-full">
      <div>
        <MainWeather />
      </div>
      <div>
        <SecondWeather />
      </div>
    </div>
  );
};

export default WeatherPage;
