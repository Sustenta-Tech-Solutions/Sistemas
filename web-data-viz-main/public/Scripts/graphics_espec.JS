// graphics_espec.JS

let currentChartTemp = null;
let currentChartUmid = null;

// graphics_espec.JS - NOVO CÓDIGO PARA formatarDadosParaGrafico

function formatarDadosParaGrafico(registrosAPI) {
    const dadosFormatados = {
        horarios: [],
        temperatura: { topo: [], centro: [], base: [] },
        umidade: { topo: [], centro: [], base: [] }
    };

    // 1. Agrupar os registros pelo timestamp exato (da API que já agrupou por minuto)
    const agrupadoPorTempo = {}; 

    registrosAPI.forEach(registro => {
        const timestamp = registro.dtHoraMinuto; 

        if (!agrupadoPorTempo[timestamp]) {
            agrupadoPorTempo[timestamp] = { base: null, centro: null, topo: null };
        }
        
        const posicao = registro.posicao.toLowerCase();
        
        agrupadoPorTempo[timestamp][posicao] = {
            temperatura: registro.temperaturaMedia,
            umidade: registro.umidadeMedia
        };
    });

    // 2. Ordenar e extrair para o formato final do Chart.js
    const timestampsOrdenados = Object.keys(agrupadoPorTempo).sort();

    // Use todos os registros, já que o SQL limita a 7
    timestampsOrdenados.forEach(timestamp => {
        const grupo = agrupadoPorTempo[timestamp];
        
        // MUDANÇA AQUI: Formatar para mostrar apenas HH:mm
        const horaFormatada = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        dadosFormatados.horarios.push(horaFormatada); 
        // FIM DA MUDANÇA

        // Adiciona os dados, lendo os novos campos de média e convertendo para float
        // Temperatura
        dadosFormatados.temperatura.base.push(grupo.base ? parseFloat(grupo.base.temperatura) : null);
        dadosFormatados.temperatura.centro.push(grupo.centro ? parseFloat(grupo.centro.temperatura) : null);
        dadosFormatados.temperatura.topo.push(grupo.topo ? parseFloat(grupo.topo.temperatura) : null);
        
        // Umidade
        dadosFormatados.umidade.base.push(grupo.base ? parseFloat(grupo.base.umidade) : null);
        dadosFormatados.umidade.centro.push(grupo.centro ? parseFloat(grupo.centro.umidade) : null);
        dadosFormatados.umidade.topo.push(grupo.topo ? parseFloat(grupo.topo.umidade) : null);
    });
    
    console.log("Dados formatados (agrupados via SQL, hora curta):", dadosFormatados);

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

    atualizarCoresTabela(dadosFormatados);
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
        { label: "Sensor centro", data: dadosFormatados.temperatura.centro, borderColor: "#f76b1c", borderWidth : 2, tension: 0.3, },
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
  var fkEmpresa = sessionStorage.ID_EMPRESA;
  return fetch(`/medidas/adquirirDados/${siloId}/${fkEmpresa}`, { cache: 'no-store'})
    .then(function (response){
      if(response.ok) {
        return response.json(); 
      } else {
        throw new Error('Nenhum dado encontrado ou erro na API (404/500)');
      }
    });
}


