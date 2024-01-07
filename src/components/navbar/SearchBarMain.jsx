// SearchBarMain.jsx
import { useState } from "react";
import axios from "axios";
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import IconWeather from "../layout/IconWeather";
// import { GrSearch } from "@react-icons/all-files/gr/GrSearch";
// import { IconContext } from "react-icons";

const SearchBarMain = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState(null);
  const [dateAndTime, setGetDateAndTime] = useState({});
  const [httpError, setHttpError] = useState(null);
  const fetchData = async () => {
    try {
      // console.log(import.meta.env.VITE_API_BASE_KEY);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${
        import.meta.env.VITE_API_BASE_KEY
      }`;
      const response = await axios.get(url);
      setData(response.data);
      setHttpError(200);
      // updateWeatherData(response.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 404) {
        setHttpError(404);
      }
    }
  };


  const getDateAndTime = () => {
    const date = new Date();
    const getDate = date.getDate();
    const getMonths = date.getMonth();
    const getYear = date.getFullYear();
    const getSeconds = date.getSeconds();
    const getMinutes = date.getMinutes();
    const getHours = date.getHours();
    const doubleDot = ":";
    setGetDateAndTime({
      getDate,
      getMonths,
      getYear,
      getSeconds,
      getMinutes,
      getHours,
      doubleDot,
    });
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
    getDateAndTime();
  };

  const searchState = (e) => {
    if (e.key === "Enter") {
      fetchData();
      getDateAndTime();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex ">
        <div className="flex gap-1 items-center">
          <input
            type="text"
            value={state}
            placeholder="City Name..."
            onChange={handleInputChange}
            className="bg-slate-700 outline-none rounded-l-md placeholder:italic placeholder:text-slate-400 placeholder:pl-2 px-3 py-1 text-slate-200"
            onKeyDownCapture={searchState}
          />
        </div>
        <button
          onClick={handleSearchClick}
          className="bg-slate-700 rounded-r-md pr-2 text-slate-100"
        >
          <IoLocationOutline />
        </button>
      </div>
      <div className="mt-10">
        <IconWeather weatherData={data} httpError={httpError} />
      </div>
      <div className="mt-10">
        {dateAndTime && httpError === 200 && (
          <>
            <div className="text-center text-base text-slate-100 font-Ubuntu animate-fadeIn animate-fadeOutduration-700">
              <p>
                {dateAndTime.getDate} {month[dateAndTime.getMonths]}{" "}
                {dateAndTime.getYear}
              </p>
            </div>
            <div className="text-center text-base text-slate-100 font-Ubuntu animate-fadeIn animate-fadeOutduration-700">
              {dateAndTime.getHours} {dateAndTime.doubleDot}{" "}
              {dateAndTime.getMinutes}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBarMain;
