import React from "react";
import PropTypes from "prop-types";
import { RiCelsiusLine } from "@react-icons/all-files/ri/RiCelsiusLine";

const IconWeather = ({ weatherData, httpError }) => {
  if (
    !weatherData ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return httpError !== 200 ? (
      <div className="mx-auto text-balance text-lg text-slate-100 font-Ubuntu animate-fadeIn">
        No weather data available, maybe you entered the wrong city or state name.
      </div>
    ) : null;
  }

  const weatherInfo = weatherData.weather[0];

  const getIconUrl = () => {
    const url = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
    return <img src={url} alt="Weather Icon" />;
  };

  return (
    <div>
      {httpError === 200 && httpError !== 404 && (
        <div
          className={`flex justify-center items-center flex-col gap-[2rem] ${
            httpError === 200 && httpError !== 404
              ? "animate-fadeIn"
              : "animate-fadeOut"
          }`}
        >
          <div className="border-b-4 mx-auto">{getIconUrl()}</div>
          <div>
            <p
              className="text-center text-2xl text-slate-100 font-Ubuntu flex flex-wrap justify-center capitalize animate-fadeIn 
"
            >
              {(weatherData.main.temp - 275).toFixed(1)} <RiCelsiusLine />
            </p>
            <p
              className="mx-auto text-center text-xl text-slate-100 font-Ubuntu border-b-4 flex flex-wrap justify-center capitalize animate-fadeIn
"
            >
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
        main: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ),
    main: PropTypes.shape({
      temp: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
};

export default IconWeather;
