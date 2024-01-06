import React from "react";
import PropTypes from "prop-types";
import { RiCelsiusLine } from '@react-icons/all-files/ri/RiCelsiusLine'

const IconWeather = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return <div className="mx-auto text-center text-lg text-slate-100 font-Ubuntu">No weather data available</div>;
  }


  const weatherInfo = weatherData.weather[0];

  const getIconUrl = () => {
    const url = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
    return <img src={url} alt="Weather Icon"  />;
  };

  return (
    <div className="flex justify-center items-center flex-col gap-[2rem]">
      <div className="border-b-4 mx-auto">{getIconUrl()}</div>
      <div>
        <p className="text-center text-2xl text-slate-100 font-Ubuntu flex flex-wrap justify-center capitalize">
          {(weatherData.main.temp - 275).toFixed(1)} <RiCelsiusLine/>
        </p>
        <p className="mx-auto text-center text-xl text-slate-100 font-Ubuntu border-b-4 flex flex-wrap justify-center capitalize">
          {weatherInfo.description}
        </p>
      </div>
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
      humidity: PropTypes.number
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number
    })
  }),
};


export default IconWeather;
