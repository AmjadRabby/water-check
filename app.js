const apiKey = "cdd7d1193d06bad9063cf2bf7420a24c";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const handleWeatherData = (city) => {
  const url = `${apiBase}?q=${city}&appid=${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => handleSetData(data));
};
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("input-city").value;
  handleWeatherData(city);
});

const handleSetData = (data) => {
  console.log(data);
  document
    .getElementById("weather-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  document.getElementById("city-name").innerText = data.name;
  document.getElementById("city-temp").innerText = data.main.temp;
  document.getElementById("city-cloud").innerText = data.weather[0].main;
};

handleWeatherData('dhaka')
