import { useSelector } from "react-redux";
import { FaWind } from "@react-icons/all-files/fa/FaWind";
import { IoWaterOutline } from "@react-icons/all-files/io5/IoWaterOutline";
import { IoArrowUp } from "@react-icons/all-files/io5/IoArrowUp";
import { IoArrowDown } from "@react-icons/all-files/io5/IoArrowDown";
import { RiCelsiusLine } from "@react-icons/all-files/ri/RiCelsiusLine";

const WidgetWeather = () => {
  const weatherData = useSelector((state) => state.weather);
  // console.log(weatherData)

  const humidity = weatherData?.main?.humidity;
  const deg = weatherData?.wind?.deg;
  const wind = weatherData?.wind?.speed;
  const realFeel = weatherData?.main?.feels_like;
  const pressure = weatherData?.main?.pressure;
  const maxTemp = weatherData?.main?.temp_max;
  const minTemp = weatherData?.main?.temp_min;
  const sunrise = weatherData?.sys?.sunrise;
  const sunset = weatherData?.sys?.sunset;

  // console.log(humidity)
  const degreeToWindDirection = (deg) => {
    const directions = [
      "North",
      "North-Northeast",
      "Northeast",
      "East-Northeast",
      "East",
      "East-Southeast",
      "Southeast",
      "South-Southeast",
      "South",
      "South-Southwest",
      "Southwest",
      "West-Southwest",
      "West",
      "West-Northwest",
      "Northwest",
      "North-Northwest",
    ];
    const index = Math.round((deg % 360) / 22.5);
    return directions[index % 16];
  };

  // console.log(degreeToWindDirection(deg));

  const convertUnixTimeToReadable = (time) => {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      {(humidity !== null && humidity !== undefined) && (
        <div className="flex flex-wrap justify-center w-[100%] h-[80%] gap-[2rem]">
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Wind
            </p>
            <div className="flex items-center gap-1 mt-2">
              <FaWind className="text-slate-300 ml-2 " />
              <p className="font-Ubuntu text-slate-300 ">{wind} Km/h</p>
            </div>
            <p className="font-Ubuntu text-slate-300 text-sm ml-2 mt-5">
              {degreeToWindDirection(deg)}
            </p>
          </div>
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Humidity
            </p>
            <div className="flex items-center gap-1 mt-3">
              <IoWaterOutline className="text-slate-300 ml-2" />
              <p className="text-slate-300 font-Ubuntu text-md">{humidity}%</p>
            </div>
          </div>
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Real Feel
            </p>
            <div className="flex items-center gap-1 mt-3 ml-2">
              <p className="font-Ubuntu text-md text-slate-300">{realFeel}</p>
              <RiCelsiusLine className="text-slate-300 text-lg" />
            </div>
          </div>
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Pressure
            </p>
            <p className="text-slate-300 ml-2 mt-2">{pressure} mb</p>
          </div>
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Temperature
            </p>
            <div className="ml-2  justify-start flex-col">
              <div className="mt-2 flex gap-0">
                <IoArrowUp className="text-red-500 text-xl" />
                <p className="text-slate-300 font-Ubuntu text-base">
                  {(maxTemp - 275).toFixed(1)}
                </p>
              </div>
              <div className="flex gap-0">
                <IoArrowDown className="text-cyan-500 text-xl" />
                <p className="text-slate-300 font-Ubuntu text-base">
                  {(minTemp - 275).toFixed(1)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 w-[28%] h-[110px] rounded-md animate-fadeIn">
            <p className="font-Ubuntu font-medium text-slate-300 ml-2 mt-1 text-md">
              Sun
            </p>
            <div>
              <div>
                <p className="text-slate-300 ml-2 mt-1">
                  set: {convertUnixTimeToReadable(sunset)}
                </p>
                <p className="text-slate-300 ml-2 mt-1">
                  rise: {convertUnixTimeToReadable(sunrise)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WidgetWeather;
