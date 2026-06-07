import { CONFIG } from "../config.js";

export async function loadWeather() {

    const block = document.getElementById("weather");

    try {

        const res = await fetch(CONFIG.WEATHER_URL);

        if (!res.ok)
            throw new Error();

        const data = await res.json();

        block.textContent =
            `${data.current_weather.temperature}°C`;

        localStorage.setItem(
            "weather",
            block.textContent
        );

    } catch {

        block.textContent =
            localStorage.getItem("weather")
            || "Погода недоступна";
    }
}