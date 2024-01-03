import "./App.css";
import { NavBar } from "./components";
import { WeatherPage } from "./views";
import "./views";

function App() {
  return (
    <div className="px-0 mx-0 box-border w-full h-full">
      <div>
        <NavBar />
        <WeatherPage />
      </div>
    </div>
  );
}

export default App;
