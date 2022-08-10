//day&hour change
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[currentDate.getDay()];
let dayHourChange = document.querySelector("#current-date-time");
dayHourChange.innerHTML = `${day} ${hours}:${minutes}`;

//celsius vs fahrenheit
function celsiusDegrees(){
    let celsiusDegree = document.querySelector("#temperature");
    celsiusDegree.innerHTML = 28;
}
let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", celsiusDegrees);

function fahrenheitDegrees(){
    let fahrenheitDegree = document.querySelector("#temperature");
    fahrenheitDegree.innerHTML = 83;
}
let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", fahrenheitDegrees);

//API
let apiKey = "ddfe3d497814bcf39a3c3838375116a5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid"

function showTemperature(response){
    console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let weatherElement = document.querySelector("#weather-general");
    weatherElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = response.data.wind.speed;
}

//city change
function alertSearch(){
let cityInput = document.querySelector("#search-input");
let cityOutput = document.querySelector("#city-change");
cityOutput.innerHTML = cityInput.value;

axios.get(`${apiUrl}&q=${cityInput.value}&appid=${apiKey}`).then(showTemperature);
}
let citySearch = document.querySelector("#search-button");
citySearch.addEventListener("click", alertSearch);

//current position button
let apiCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid"

function getCurrentPosition(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    let x = position.coords.latitude;
    let y = position.coords.longitude;

axios.get(`${apiCurrentUrl}&lat=${x}&lon=${y}&appid=${apiKey}`).then(changeCity);
}

let currentLocation = document.querySelector("#current-location-button");
    currentLocation.addEventListener("click", getCurrentPosition);

function changeCity(response){
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
}
