const weatherReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_WEATHER_DATA':
      return action.payload;
    default:
      return state;
  }
}


export default weatherReducer;