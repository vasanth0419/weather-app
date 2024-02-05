# TASK WEATHER APP API SUMMITION..

#### _CREATE A HTML FILE NAME_: `index.html`

#### Codes..

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WEATHER FORECASTING</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./css/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container-fluid">
      <div class="title"><h1>WEATHER FORECATING</h1></div>
      <div class="row">
        <div class="col-lg-5 col-md-12 col-sm-12 col-12">
          <div class="container">
            <div class="card">
              <div class="search">
                <input type="text" placeholder="Enter the city name" />
                <button type="button">Search</button>
              </div>
              <div class="main-weather">
                <img
                  src="images/images/rain.png"
                  alt="rain"
                  class="weather-icon"
                />
                <h1 class="temp text-white">0°F</h1>
                <h2 class="city text-white">City Name</h2>
                <div class="details">
                  <div class="col text-white">
                    <img src="images/images/humidity.png" alt="humidity" />
                    <div>
                      <p class="humidity">0 %</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                  <div class="col text-white">
                    <img src="images/images/wind.png" alt="wind" />
                    <div>
                      <p class="speed">0 km/h</p>
                      <p>Wind speed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="days-forecast">
            <br /><br />
            <h2 class="day">5-Day's Forecast</h2>
            <ul class="weather-cards">
              <li class="card col-md-6 col-sm-12">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
              <li class="card">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
              <li class="card">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
              <li class="card">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
              <li class="card">
                <h3>( ______ )</h3>
                <h6>Temp: __C</h6>
                <h6>Wind: __ M/S</h6>
                <h6>Humidity: __%</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <script src="./js/script.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>


```

##### In head tag add css `style.css` bootstrap link....

#### Codes..

```
@font-face {
  font-family: "ProtestRiot";
  src: url("Protest_Riot/ProtestRiot-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  padding: 0;
  margin: 0;
  height: 100vh;
  font-family: fantasy;
}

.title {
  color: white;
  border-radius: 30px;
  border: 1px solid white;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  justify-content: right;
}

.card {
  width: 70%;
  max-width: 470px;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  color: white;
  margin: 30px 10px 0;
  border-radius: 30px !important;
  padding: 10px 10px;
  justify-content: center;
  text-align: center;
}
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search input {
  border: 0;
  outline: 0;
  background-color: white;
  padding: 10px 25px;
  height: 50px;
  border-radius: 30px;
  flex: 1;
  margin-top: 20px;
  margin-right: 10px;
  font-size: px;
}
.search button {
  border: 0;

  margin-top: 20px;
  outline: 0;
  background-color: white;
  padding: 5px;
  height: 50px;
  width: 90px;
  border-radius: 50px;
  cursor: pointer;
}
.weather {
  color: white;
}
.weather-icon {
  width: 170px;
  margin-top: 30px;
}
.weather h1 {
  font-size: 60px;
  font-weight: 500;
}
.weather h2 {
  font-size: 35px;
  font-weight: 400;
  margin-top: -10px;
}
.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 50px;
}
.col {
  display: flex;
  align-items: center;
  text-align: left;
}
.col img {
  width: 40px;
  margin-right: 10px;
}
.humidity,
.wind {
  font-size: 28px;
  margin-top: -6px;
}
.days-forecast .weather-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.weather-cards .card {
  color: #fff;
  width: auto !important;
  padding: 5px;
  list-style: none;
  width: calc(100% / 5);
  border-radius: 5px;

  padding: 30px;
}
.weather-cards .card h3 {
  font-size: 1.3rem;
  font-weight: 600;
}
/* .weather-cards .card img {
  max-width: 70px;
  margin: 5px 0 -12px 0;
} */
.day {
  font-size: 25px;
  color: white;
  text-align: center;
  justify-content: center;
  text-decoration: underline;
}


```

#### create a js file `script.js`.

##### codes in file.

```

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




```
