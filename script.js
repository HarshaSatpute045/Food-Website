 const inputBox = document.querySelector(".input-box");
    const searchBtn = document.getElementById("searchBtn");
    const weather_img = document.querySelector(".weather-img");
    const temprature = document.querySelector(".temprature");
    const description = document.querySelector(".description");
    const humidity = document.getElementById("humidity");
    const wind_speed = document.getElementById("wind-speed");
    const location_not_found = document.querySelector(".location-not-found");
    const weather_body = document.querySelector(".weather-body");

    async function checkWeather(city) {
      const api_key = "61dedbc0b50e781744ee455b1a03093e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

      try {
        const response = await fetch(url);
        const weather_data = await response.json();

        if (weather_data.cod === "404") {
          weather_body.style.display = "none";
          location_not_found.style.display = "flex";
          return;
        }

        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
        temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed} km/H`;

        switch (weather_data.weather[0].main) {
          case "Clouds":
            weather_img.src = "./cloudImg.png";
            break;
          case "Clear":
            weather_img.src = "./cloudyImg.jpg";
            break;
          case "Rain":
            weather_img.src = "./rainImg.jpg";
            break;
          case "Mist":
            weather_img.src = "./mistImg.jpg";
            break;
          case "Snow":
            weather_img.src = "./snowImg.jpg";
            break;
          default:
            weather_img.src = "./cloudImg.png";
        }
      } catch (error) {
        alert("Failed to fetch weather data. Please check your internet or try again later.");
        console.error(error);
      }
    }

    searchBtn.addEventListener("click", () => {
      const city = inputBox.value.trim();
      if (city !== "") {
        checkWeather(city);
      }
    });