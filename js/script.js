const API_KEY = "fa47c18359af34c29aa5205f821d1dbe";
const mainWeatherCard = document.querySelector(".main-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");
const cityInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(new Error(`Error fetching data: ${error.message}`)));
  });
}

function createWeatherCard(cityName, weatherItem, index) {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`;
  const humidityIconUrl = "images/images/humidity.png";

  if (index === 0) {
    const weatherElement = document.createElement("div");
    weatherElement.className = "weather";
    weatherElement.innerHTML = `
      <img src="${iconUrl}" alt="weather-icon" class="weather-icon">
      <h1 class="temp">${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h1>
      <h2 class="city">${cityName}</h2>
      <div class="details">
        <div class="col">
          <img src="${humidityIconUrl}" alt="humidity" />
          <div>
            <p class="humidity">${weatherItem.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="images/images/wind.png" alt="wind" />
          <div>
            <p class="speed">${weatherItem.wind.speed} M/S</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>`;
    return weatherElement;
  } else {
    const weatherCard = document.createElement("li");
    weatherCard.className = "card";
    weatherCard.innerHTML = `
      <h3>${weatherItem.dt_txt.split(" ")[0]}</h3>
      <img src="${iconUrl}" alt="weather-icon">
      <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
      <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
      <h6>Humidity: ${weatherItem.main.humidity}%</h6>`;
    return weatherCard;
  }
}

function updateMainWeather(cityName, weatherData) {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;

  const weatherElement = createWeatherCard(cityName, weatherData, 0);
  mainWeatherCard.innerHTML = "";
  mainWeatherCard.appendChild(weatherElement);
}

function updateForecastWeather(weatherList) {
  weatherCardsDiv.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const weatherCard = createWeatherCard("", weatherList[i], i);
    weatherCardsDiv.appendChild(weatherCard);
  }
}

function searchWeather(cityName) {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

  fetchData(WEATHER_API_URL)
    .then((data) => {
      updateMainWeather(cityName, data.list[0]);
      updateForecastWeather(data.list);
    })
    .catch((error) => {
      alert(`An error occurred: ${error.message}`);
    });
}

function getWeatherDetails() {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  searchWeather(cityName);
}

searchButton.addEventListener("click", getWeatherDetails);

cityInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getWeatherDetails();
  }
});
