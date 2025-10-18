// Graficos Tela Geral
const ctxTemp = document.getElementById("chartTemp");
const ctxUmid = document.getElementById("chartUmid");

new Chart(ctxTemp, {
  type: "line",
  data: {
    labels: [
      "8:00:00 AM",
      "8:15:00 AM",
      "8:30:00 AM",
      "8:45:00 AM",
      "9:00:00 AM",
      "9:15:00 AM",
      "9:30:00 AM",
    ],
    datasets: [
      {
        label: "Silo A",
        data: [11.5, 11.3, 11.1, 11.0, 11.8, 13.5, 13],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Silo B",
        data: [31, 33, 32, 34, 36, 40, 38],
        borderColor: "#f76b1c",
        backgroundColor: "#f76b1c",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Silo C",
        data: [25, 24, 23, 25, 26, 25, 24],
        borderColor: "#2e8b57",
        backgroundColor: "#2e8b57",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Temperatura média por silo",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        suggestedMin: 0,
        suggestedMax: 45,
        grid: {
          color: "#0074D9",
          lineWidth: 1,
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
  },
});

new Chart(ctxUmid, {
  type: "line",
  data: {
    labels: [
      "8:00:00 AM",
      "8:15:00 AM",
      "8:30:00 AM",
      "8:45:00 AM",
      "9:00:00 AM",
      "9:15:00 AM",
      "9:30:00 AM",
    ],
    datasets: [
      {
        label: "Silo A",
        data: [60, 64, 69, 67, 71, 75, 66],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Silo B",
        data: [59, 63, 65, 68, 73, 75, 78],
        borderColor: "#f76b1c",
        backgroundColor: "#f76b1c",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Silo C",
        data: [57, 63, 65, 66, 59, 67, 70],
        borderColor: "#2e8b57",
        backgroundColor: "#2e8b57",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Umidade média por silo",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        suggestedMin: 50,
        suggestedMax: 90,
        grid: {
          color: "#0074D9",
          lineWidth: 1,
        },
        ticks: {
          stepSize: 5,
        },
      },
    },
  },
});


