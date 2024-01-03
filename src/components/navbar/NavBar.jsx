import { FaCloud } from "@react-icons/all-files/fa/FaCloud";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const NavBar = () => {
  return (
    <div className="w-full h-11 bg-stone-300 flex justify-around font-Ubuntu">
      <div className="flex flex-row justify-between items-center gap-2 ml-2 font-semibold text-xl">
        <h1>Weather App</h1>
        <FaCloud />
      </div>

      <div className="flex flex-row justify-between  items-center gap-2 mr-2 text-2xl cursor-pointer">
        <a href="https://www.instagram.com/raihan.nnn/?hl=en" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/RH203" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
