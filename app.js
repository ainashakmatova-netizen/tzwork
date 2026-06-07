import { startClock }
from "./widgets/clock.js";

import { loadWeather }
from "./widgets/weather.js";

import { loadCurrency }
from "./widgets/currency.js";

import { loadNews }
from "./widgets/news.js";

import {
    createChart,
    updateChart
}
from "./chart-setup.js";

startClock();

createChart();

let loading = false;

async function updateDashboard() {

    if (loading) return;

    loading = true;

    const rate =
        await loadCurrency();

    updateChart(rate);

    await Promise.all([
        loadWeather(),
        loadNews()
    ]);

    loading = false;
}

updateDashboard();

setInterval(
    updateDashboard,
    60000
);