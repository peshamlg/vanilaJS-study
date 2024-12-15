import { API_KEY } from "./config.js";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}&limit=1`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(geoUrl)
    .then((response) => response.json())
    .then((data) => {
      const location = document.querySelector("#location");
      location.innerText = data[0].local_names.ko;
    });
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`;
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
