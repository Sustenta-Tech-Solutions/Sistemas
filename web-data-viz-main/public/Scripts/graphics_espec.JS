// graphics_espec.JS

let currentChartTemp = null;
let currentChartUmid = null;

function formatarDadosParaGrafico(registrosAPI) {
    const dadosFormatados = {
        horarios: [],
        temperatura: { topo: [], centro: [], base: [] },
        umidade: { topo: [], centro: [], base: [] }
    };

    const agrupadoPorMinuto = {};

    registrosAPI.forEach(registro => {
        const dataHora = new Date(registro.dtHora);

        // --- Correção: Arredondar para o minuto mais próximo ---
        // Isso garante que sensores que registram em 10:46:01 e 10:46:03 sejam agrupados juntos.
        dataHora.setSeconds(0, 0); 
        const timestampArredondado = dataHora.toISOString(); 

        if (!agrupadoPorMinuto[timestampArredondado]) {
            agrupadoPorMinuto[timestampArredondado] = { base: null, centro: null, topo: null };
        }
        
        const posicao = registro.posicao.toLowerCase();

        if (posicao === 'base') agrupadoPorMinuto[timestampArredondado].base = registro;
        else if (posicao === 'centro') agrupadoPorMinuto[timestampArredondado].centro = registro;
        else if (posicao === 'topo') agrupadoPorMinuto[timestampArredondado].topo = registro;
    });

    // Ordena os timestamps únicos por minuto
    const timestampsOrdenados = Object.keys(agrupadoPorMinuto).sort();

    timestampsOrdenados.forEach(timestamp => {
        const grupo = agrupadoPorMinuto[timestamp];
        
        const horaFormatada = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Adiciona o horário ÚNICO ao array de labels
        dadosFormatados.horarios.push(horaFormatada);

        // Adiciona os dados, preenchendo com 'null' se o sensor não tiver registro naquele minuto
        // Temperatura
        dadosFormatados.temperatura.base.push(grupo.base ? parseFloat(grupo.base.temperatura) : null);
        dadosFormatados.temperatura.centro.push(grupo.centro ? parseFloat(grupo.centro.temperatura) : null);
        dadosFormatados.temperatura.topo.push(grupo.topo ? parseFloat(grupo.topo.temperatura) : null);
        
        // Umidade
        dadosFormatados.umidade.base.push(grupo.base ? parseFloat(grupo.base.umidade) : null);
        dadosFormatados.umidade.centro.push(grupo.centro ? parseFloat(grupo.centro.umidade) : null);
        dadosFormatados.umidade.topo.push(grupo.topo ? parseFloat(grupo.topo.umidade) : null);
    });
    
    console.log("Dados formatados (corrigido) para Chart.js:", dadosFormatados);

    return dadosFormatados;
}



// FUNÇÃO PARA CARREGAR DADOS E CRIAR GRÁFICOS (AGORA ASSÍNCRONA)
async function carregarGraficosSilo(siloId) { 
  
  const ctxTemp = document.getElementById("chartTemp");
  const ctxUmid = document.getElementById("chartUmid");

  // --- DESTROI GRÁFICOS ANTERIORES SE EXISTIREM ---
  if (currentChartTemp) {
    currentChartTemp.destroy();
  }
  if (currentChartUmid) {
    currentChartUmid.destroy();
  }

  console.log("estou no gerar dados:", siloId);
  
  let dadosFormatados; 
  try {
    const dadosAPI = await adquirirDados(siloId);
    console.log("Dados recebidos da API:", dadosAPI);

    dadosFormatados = formatarDadosParaGrafico(dadosAPI);
    console.log("Dados formatados para Chart.js:", dadosFormatados);

  } catch (error) {
    console.error(`Erro ao obter dados para o Silo ${siloId}:`, error.message);
    return;
  }

  // --- Temperatura ---
  currentChartTemp = new Chart(ctxTemp, {
    type: "line",
    data: {
      labels: dadosFormatados.horarios,
      datasets: [
        { label: "Sensor topo", data: dadosFormatados.temperatura.topo, borderColor: "#005a9e", borderWidth: 2, tension: 0.3, },
        { label: "Sensor centro", data: dadosFormatados.temperatura.centro, borderColor: "#f76b1c", borderWidth: 2, tension: 0.3, },
        { label: "Sensor base", data: dadosFormatados.temperatura.base, borderColor: "#2e8b57", borderWidth: 2, tension: 0.3, },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: `Temperatura – Silo ${siloId}` },
      },
    },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: false, grid: { color: "#0074D9", lineWidth: 1 }, ticks: { stepSize: 5 }, }, },
  });

  // --- Umidade ---
  currentChartUmid = new Chart(ctxUmid, {
    type: "line",
    data: {
      labels: dadosFormatados.horarios,
      datasets: [
        { label: "Sensor topo", data: dadosFormatados.umidade.topo, borderColor: "#005a9e", pointRadius: 4, pointHoverRadius: 6, borderWidth: 2, tension: 0.3, fill: false, },
        { label: "Sensor centro", data: dadosFormatados.umidade.centro, borderColor: "#f76b1c", pointRadius: 4, pointHoverRadius: 6, borderWidth: 2, tension: 0.3, fill: false, },
        { label: "Sensor base", data: dadosFormatados.umidade.base, borderColor: "#2e8b57", pointRadius: 4, pointHoverRadius: 6, borderWidth: 2, tension: 0.3, fill: false, },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        title: { display: true, text: `Umidade – Silo ${siloId}` },
      },
    },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: false, grid: { color: "#0074D9", lineWidth: 1 }, ticks: { stepSize: 5 }, }, },
  });
}


function adquirirDados(siloId){
  return fetch(`/medidas/adquirirDados/${siloId}`, { cache: 'no-store'})
    .then(function (response){
      if(response.ok) {
        return response.json(); 
      } else {
        throw new Error('Nenhum dado encontrado ou erro na API (404/500)');
      }
    });
}
