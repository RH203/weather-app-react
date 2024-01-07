import { WidgetWeather, ButtonTodaySecond } from "../../components";

const SecondWeather = () => {
  return (
    <div className="flex justify-center flex-col gap-10">
      <div className="ml-[20px] mt-5">
        <ButtonTodaySecond />
      </div>
      <div>
        <WidgetWeather />
      </div>
    </div>
  );
};

export default SecondWeather;
