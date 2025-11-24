// Graficos tela especifica

const ctxTemp1 = document.getElementById("chartTemp1");
const ctxUmid1 = document.getElementById("chartUmid1");

new Chart(ctxTemp1, {
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
        label: "Sensor topo",
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
        label: "Sensor meio",
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
        label: "Sensor base",
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
        text: "Temperatura por sensor",
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

new Chart(ctxUmid1, {
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
        label: "Sensor topo",
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
        label: "Sensor meio",
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
        label: "Sensor base",
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
        text: "Umidade por sensor",
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

// Grafico silo 2

const ctxTemp2 = document.getElementById("chartTemp2");
const ctxUmid2 = document.getElementById("chartUmid2");


new Chart(ctxTemp2, {
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
        label: "Sensor topo",
        data: [11.5, 16, 14, 12, 18, 19, 25],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor meio",
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
        label: "Sensor base",
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
        text: "Temperatura por sensor",
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

new Chart(ctxUmid2, {
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
        label: "Sensor topo",
        data: [61, 64, 69, 67, 71, 75, 79],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor meio",
        data: [55, 57, 59, 60, 62, 57, 54],
        borderColor: "#f76b1c",
        backgroundColor: "#f76b1c",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor base",
        data: [64, 68, 70, 77, 74, 77, 80],
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
        text: "Umidade por sensor",
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

// Grafico silo 2

const ctxTemp3 = document.getElementById("chartTemp3");
const ctxUmid3 = document.getElementById("chartUmid3");


new Chart(ctxTemp3, {
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
        label: "Sensor topo",
        data: [11.5, 16, 14, 12, 18, 19, 25],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor meio",
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
        label: "Sensor base",
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
        text: "Temperatura por sensor",
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

new Chart(ctxUmid3, {
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
        label: "Sensor topo",
        data: [55, 53, 50, 40, 37, 60, 58],
        borderColor: "#005a9e",
        backgroundColor: "#005a9e",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor meio",
        data: [60, 66, 68, 63, 69, 70, 65],
        borderColor: "#f76b1c",
        backgroundColor: "#f76b1c",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "Sensor base",
        data: [74, 78, 80, 87, 84, 87, 90],
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
        text: "Umidade por sensor",
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

