let chartTemp = {};
let chartUmid = {};

function carregarGraficosSilo(siloId) {
  const ctxTemp = document.getElementById(`chartTemp${siloId}`);
  const ctxUmid = document.getElementById(`chartUmid${siloId}`);

  // Simulação temporária (troque pelo fetch depois)
  const dados = gerarDadosFake();

  // --- Temperatura ---
  chartTemp[siloId] = new Chart(ctxTemp, {
    type: "line",
    data: {
      labels: dados.horarios,
      datasets: [
        {
          label: "Sensor topo",
          data: dados.temperatura.topo,
          borderColor: "#005a9e",
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: "Sensor meio",
          data: dados.temperatura.meio,
          borderColor: "#f76b1c",
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: "Sensor base",
          data: dados.temperatura.base,
          borderColor: "#2e8b57",
          borderWidth: 2,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: `Temperatura – Silo ${siloId}` }
      }
    }
  });

  // --- Umidade ---
  chartUmid[siloId] = new Chart(ctxUmid, {
    type: "line",
    data: {
      labels: dados.horarios,
      datasets: [
        {
          label: "Sensor topo",
          data: dados.umidade.topo,
          borderColor: "#005a9e",
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: "Sensor meio",
          data: dados.umidade.meio,
          borderColor: "#f76b1c",
          borderWidth: 2,
          tension: 0.3,
        },
        {
          label: "Sensor base",
          data: dados.umidade.base,
          borderColor: "#2e8b57",
          borderWidth: 2,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: `Umidade – Silo ${siloId}` }
      }
    }
  });
}


function atualizarGraficos(siloId, dados) {

  const tempChart = chartTemp[siloId];
  const umidChart = chartUmid[siloId];

  tempChart.data.labels = dados.horarios;
  tempChart.data.datasets[0].data = dados.temperatura.topo;
  tempChart.data.datasets[1].data = dados.temperatura.meio;
  tempChart.data.datasets[2].data = dados.temperatura.base;
  tempChart.update();

  umidChart.data.labels = dados.horarios;
  umidChart.data.datasets[0].data = dados.umidade.topo;
  umidChart.data.datasets[1].data = dados.umidade.meio;
  umidChart.data.datasets[2].data = dados.umidade.base;
  umidChart.update();
}


function gerarDadosFake() {
  return {
    horarios: ["08:00","08:15","08:30","08:45","09:00","09:15","09:30"],
    temperatura: {
      topo: Array.from({ length: 5 }, () => (Math.random() * 10 + 15)),
      meio: Array.from({ length: 5 }, () => (Math.random() * 15 + 25)),
      base: Array.from({ length: 5 }, () => (Math.random() * 10 + 20))
    },
    umidade: {
      topo: Array.from({ length: 5 }, () => (Math.random() * 15 + 50)),
      meio: Array.from({ length: 5 }, () => (Math.random() * 10 + 60)),
      base: Array.from({ length: 5 }, () => (Math.random() * 20 + 70))
    }
  };
}