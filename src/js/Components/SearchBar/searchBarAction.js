import axios from 'axios';

export function getWeather(input) {
  const apiKey = `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID${process.env.API_KEY}`;
  return {
    type: 'GET_WEATHER',
    payload: axios.get(apiKey)
  };
}

export function searchInput(input) {
  return {
    type: 'SEARCH_INPUT',
    payload: { input }
  };
}
