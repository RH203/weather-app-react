import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { RiCelsiusLine } from "@react-icons/all-files/ri/RiCelsiusLine";

const IconWeather = ({ weatherData, httpError }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (httpError === 200) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [weatherData, httpError]);

  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return (
      <div className="mx-auto text-center text-lg text-slate-100 font-Ubuntu">
        No weather data available
      </div>
    );
  }

  const weatherInfo = weatherData.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

  return (
    <div>
      {httpError === 200 && (
        <div className={`flex justify-center items-center flex-col gap-[2rem] ${animate ? "animate-fadeIn" : ""}`}>
          <div className="border-b-4 mx-auto">
            <img src={iconUrl} alt="Weather Icon" />
          </div>
          <div>
            <p className="text-center text-2xl text-slate-100 font-Ubuntu flex flex-wrap justify-center capitalize">
              {(weatherData.main.temp - 275).toFixed(1)} <RiCelsiusLine />
            </p>
            <p className="mx-auto text-center text-xl text-slate-100 font-Ubuntu border-b-4 flex flex-wrap justify-center capitalize">
              {weatherInfo.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

IconWeather.propTypes = {
  weatherData: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
  }),
  httpError: PropTypes.number,
};

export default IconWeather;
