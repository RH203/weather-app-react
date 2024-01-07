export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export const setWeatherData = (data) => {
  return {
    type: SET_WEATHER_DATA,
    payload: data
  };
};
