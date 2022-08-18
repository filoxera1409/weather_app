//day&hour change
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[currentDate.getDay()];
let dayHourChange = document.querySelector("#date");
dayHourChange.innerHTML = `${day} ${hours}:${minutes}`;

//celsius vs fahrenheit
let celsiusGlobal = null;
let iconGlobal = null;

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", celsiusDegrees);

function celsiusDegrees(){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = celsiusGlobal.toFixed();
}

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", fahrenheitDegrees);

function fahrenheitDegrees(event){
    event.preventDefault();
    let fahrenheit = (celsiusGlobal * 9)/5 + 32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = fahrenheit.toFixed();
}
//API
let apiKey = "ddfe3d497814bcf39a3c3838375116a5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid"

function showTemperature(response){
    celsiusGlobal = response.data.main.temp;
    iconGlobal =  response.data.weather[0].icon;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusGlobal);
    let weatherElement = document.querySelector("#weather-general");
    weatherElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = response.data.wind.speed;
    let weatherIconElement = document.querySelector(".icon");
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${iconGlobal}@2x.png`);
console.log(iconGlobal)


if (iconGlobal === "01d") {
    document.body.style.backgroundImage = "url('../image/04.jpg')";
}else if (iconGlobal === "03d" || "04d"){
document.body.style.backgroundImage = "url('../image/02.jpg')";
}  else if (iconGlobal === "10d"){
document.body.style.backgroundImage = "url('../image/05.jpg')";
}
else if (iconGlobal === "01n" || "02n"|| "03n"|| "04n"|| "09n"|| "10n"|| "11n" || "13n"|| "50n"){
document.body.style.backgroundImage = "url('../image/01.jpg')";
}

else if (iconGlobal === "02d"){
document.body.style.backgroundImage = "url('../image/04.jpg')";
}
else if (iconGlobal === "09d"){
document.body.style.backgroundImage = "url('../image/06.jpg')";
}

else if (iconGlobal === "11d"){
document.body.style.backgroundImage = "url('../image/07.jpg')";
}
else if (iconGlobal === "13d"){
document.body.style.backgroundImage = "url('../image/08.jpg')";
}
else if (iconGlobal === "50d"){
document.body.style.backgroundImage = "url('../image/09.jpg')";
}
else{
    document.body.style.backgroundImage = "url('../image/01.jpg')";
}
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
    celsiusGlobal = response.data.main.temp;
    iconGlobal =  response.data.weather[0].icon;
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
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${iconGlobal}@2x.png`);



if (iconGlobal === "01d") {
    document.body.style.backgroundImage = "url('../image/03.jpg')";
}  
else if (iconGlobal === "01n" || "02n"|| "03n"|| "04n"|| "09n"|| "10n"|| "11n" || "13n"|| "50n"){
document.body.style.backgroundImage = "url('../image/01.jpg')";
}
else if (iconDay === "03d" || "04d"){
document.body.style.backgroundImage = "url('../image/02.jpg')";
}
else if (iconDay === "02d"){
document.body.style.backgroundImage = "url('../image/04.jpg')";
}
else if (iconDay === "09d"){
document.body.style.backgroundImage = "url('../image/06.jpg')";
}
else if (iconDay === "10d"){
document.body.style.backgroundImage = "url('../image/05.jpg')";
}
else if (iconDay === "11d"){
document.body.style.backgroundImage = "url('../image/07.jpg')";
}
else if (iconDay === "13d"){
document.body.style.backgroundImage = "url('../image/08.jpg')";
}
else if (iconDay === "50d"){
document.body.style.backgroundImage = "url('../image/09.jpg')";
}
else{
    document.body.style.backgroundImage = "url('../image/01.jpg')";
}

}
