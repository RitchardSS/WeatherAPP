const weather = new Weather();
const UIlocationWindow = document.getElementById("type-location");
const locationInput = document.getElementById("city-input");

// UIlocationWindow.style.transition = "all 2s";

// Set Change Location Window to visible
document.getElementById("loc-btn").addEventListener("click", (target) => {
  UIlocationWindow.style.visibility = "visible";
  UIlocationWindow.firstElementChild.style.transform = "translateY(0)";
});

// Setting up a "close button" in Change Location Window
document
  .getElementById("bottom")
  .firstElementChild.addEventListener("click", () => {
    weather.closeWindow();
  });

// Setting up a "Save Settings" button in Change Location Window
document
  .getElementById("bottom")
  .lastElementChild.addEventListener("click", () => {
    if (locationInput.value === "") {
      alert("Please Input a city");
    } else {
      weather
        .getWeather(locationInput.value)
        .then((result) => {
          console.log(result);
          document.getElementById("city").innerText = result.name;
          document.getElementById("state").innerText = result.sys.country;
          document.getElementById("weather").innerText =
            result.weather[0].description;
          document.getElementById("temp-c").innerText =
            "(" + result.main.temp + "°C)";
          document.getElementById("temp-f").innerText =
            (result.main.temp * 9) / 5 + 32 + "°F";
          document.getElementById(
            "additional"
          ).firstElementChild.innerText = `Relative Humidity: ${result.main.humidity}`;
          document.getElementById(
            "additional"
          ).firstElementChild.nextElementSibling.innerText = `Air pressure: ${result.main.pressure}`;
          document.getElementById(
            "additional"
          ).lastElementChild.previousElementSibling.innerText = `Feels Like: ${result.main.feels_like}°C`;
          document.getElementById(
            "additional"
          ).lastElementChild.innerText = `Wind Speed: ${result.wind.speed}`;
          weather.closeWindow();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
