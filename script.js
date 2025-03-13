async function getWeather() {
    const city = document.getElementById("city").value;
    const API_KEY = "c562e552b02fc74ea71da2d0581fd651"; // Use this API Key
    // Your API Key
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (response.status === 401) {
            alert("Invalid API Key! Check your OpenWeatherMap API Key.");
            return;
        }

        if (response.status === 404) {
            alert("City not found! Please enter a valid city name.");
            return;
        }

        document.getElementById("weather-info").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Network error. Please check your internet connection.");
    }
}
