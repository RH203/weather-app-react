import { useState } from "react";
import axios from "axios";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

const apiKey = import.meta.env.REACT_APP_API_KEY;

const SearchBar = () => {
  const [state, setState] = useState("");
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(state) +
        "&appid=" +
        encodeURIComponent(apiKey);
      const response = await axios.get(url);
      setApiData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex w-[250px] justify-around items-start font-Ubuntu gap-5 mr-[60px]">
        <p>Hello world</p>
        <p>Hello 2</p>
      </div>

      <div className="flex">
        <div className="flex flex-row items-center gap-2 mr-10">
          <input
            className="bg-slate-300 outline-none rounded-md "
            placeholder="Enter city..."
            type="text"
            value={state}
            onChange={handleInputChange}
          ></input>
          <button
            className=" text-slate-300 hover:text-slate-100"
            onClick={handleSearchClick}
          >
            <FaSearch />
          </button>
        </div>

        <div>
          <input
            className="mr-2 mt-[0.3rem] items-center h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="searchCity"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
