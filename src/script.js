//making search button wirk after pressing Enter on keyboard
let pressButton = document.getElementById("search-form");
pressButton.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});
//day&hour change
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let dayHourChange = document.querySelector("#date");
dayHourChange.innerHTML = `${day} ${hours}:${minutes}`;

//celsius vs fahrenheit
let celsiusGlobal = null;
let iconGlobal = null;

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", celsiusDegrees);

function celsiusDegrees() {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = celsiusGlobal.toFixed();
}

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", fahrenheitDegrees);

function fahrenheitDegrees(event) {
  event.preventDefault();
  let fahrenheit = (celsiusGlobal * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = fahrenheit.toFixed();
}
//API
let apiKey = "ddfe3d497814bcf39a3c3838375116a5";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid";

function showTemperature(response) {
  celsiusGlobal = response.data.main.temp;
  iconGlobal = response.data.weather[0].icon;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusGlobal);
  let weatherElement = document.querySelector("#weather-general");
  weatherElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = response.data.wind.speed;
  let weatherIconElement = document.querySelector(".icon");
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconGlobal}@2x.png`
  );
  console.log(iconGlobal);
  switch (iconGlobal) {
    case "01d":
      document.body.style.backgroundImage = "url('../image/clear-sky.jpg')";
      break;
    case "02d":
      document.body.style.backgroundImage = "url('../image/few-clouds.jpg')";
      break;
    case "03d":
      document.body.style.backgroundImage =
        "url('../image/scattered-clouds.jpg')";
      break;
    case "04d":
      document.body.style.backgroundImage = "url('../image/broken-clouds.jpg')";
      break;
    case "09d":
      document.body.style.backgroundImage = "url('../image/shower-rain.jpg')";
      break;
    case "10d":
      document.body.style.backgroundImage = "url('../image/rain.jpg')";
      break;
    case "11d":
      document.body.style.backgroundImage = "url('../image/thunderstorm.jpg')";
      break;
    case "13d":
      document.body.style.backgroundImage = "url('../image/snow.jpg')";
      break;
    case "50d":
      document.body.style.backgroundImage = "url('../image/mist.jpg')";
      break;
    case "01n":
    case "02n":
    case "03n":
    case "04n":
    case "09n":
    case "10n":
    case "11n":
    case "13n":
    case "50n":
      document.body.style.backgroundImage = "url('../image/night.jpg')";
      document.querySelector("#date").innerHTML = "It`s currently night";
      break;
  }
}
//city change
function alertSearch() {
  let cityInput = document.querySelector("#search-input");
  let cityOutput = document.querySelector("#city-change");
  cityOutput.innerHTML = cityInput.value;

  axios
    .get(`${apiUrl}&q=${cityInput.value}&appid=${apiKey}`)
    .then(showTemperature);
}
let citySearch = document.querySelector("#search-button");
citySearch.addEventListener("click", alertSearch);

//current position button
let apiCurrentUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid";

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let x = position.coords.latitude;
  let y = position.coords.longitude;

  axios
    .get(`${apiCurrentUrl}&lat=${x}&lon=${y}&appid=${apiKey}`)
    .then(changeCity);
}

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getCurrentPosition);

function changeCity(response) {
  celsiusGlobal = response.data.main.temp;
  iconGlobal = response.data.weather[0].icon;
  let cityElement = document.querySelector("#city-change");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let weatherElement = document.querySelector("#weather-general");
  weatherElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = response.data.wind.speed;
  let weatherIconElement = document.querySelector(".icon");
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconGlobal}@2x.png`
  );
  switch (iconGlobal) {
    case "01d":
      document.body.style.backgroundImage = "url('../image/clear-sky.jpg')";
      break;
    case "02d":
      document.body.style.backgroundImage = "url('../image/few-clouds.jpg')";
      break;
    case "03d":
      document.body.style.backgroundImage =
        "url('../image/scattered-clouds.jpg')";
      break;
    case "04d":
      document.body.style.backgroundImage = "url('../image/broken-clouds.jpg')";
      break;
    case "09d":
      document.body.style.backgroundImage = "url('../image/shower-rain.jpg')";
      break;
    case "10d":
      document.body.style.backgroundImage = "url('../image/rain.jpg')";
      break;
    case "11d":
      document.body.style.backgroundImage = "url('../image/thunderstorm.jpg')";
      break;
    case "13d":
      document.body.style.backgroundImage = "url('../image/snow.jpg')";
      break;
    case "50d":
      document.body.style.backgroundImage = "url('../image/mist.jpg')";
      break;
    case "01n":
    case "02n":
    case "03n":
    case "04n":
    case "09n":
    case "10n":
    case "11n":
    case "13n":
    case "50n":
      document.body.style.backgroundImage = "url('../image/night.jpg')";
      document.querySelector("#date").innerHTML = "It`s currently night";
      break;
  }
}
