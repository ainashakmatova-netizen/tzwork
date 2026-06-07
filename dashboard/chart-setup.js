let chart;

export function createChart() {

    const ctx =
        document
        .getElementById("currencyChart");

    chart = new Chart(ctx, {

        type: "line",

        data: {
            labels: [],
            datasets: [{
                label: "USD/KGS",
                data: []
            }]
        }
    });
}

export function updateChart(rate) {

    if (!rate) return;

    chart.data.labels.push(
        new Date().toLocaleTimeString()
    );

    chart.data.datasets[0].data.push(rate);

    if (chart.data.labels.length > 10) {

        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}