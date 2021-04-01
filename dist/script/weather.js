class Weather {
  constructor() {
    this.rapidKey = "a245be88b6msheafeb0cd47ccd36p15bbfbjsnedc168030876";
    this.rapidHost = "community-open-weather-map.p.rapidapi.com";
  }
  async getWeather(location) {
    const weatherResponse = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lat=0&lon=0&id=2172797&lang=en&units=metric`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${this.rapidKey}`,
          "x-rapidapi-host": `${this.rapidHost}`,
        },
      }
    );
    const weatherData = await weatherResponse.json();
    if (weatherResponse.ok) {
      return weatherData;
    } else {
      return `Error: ${weatherResponse.status}`;
    }
  }

  closeWindow(){
    UIlocationWindow.firstElementChild.style.transform = "translateY(-100px)";
    setTimeout(() => {
      UIlocationWindow.style.visibility = "hidden";
    }, 100);
    locationInput.value = "";
  }
}
