import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { saveAs } from 'file-saver';
import CustomButton from '../components/button';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        color: '#ffffff', // Cor da legenda
      },
    },
    title: {
      display: true,
      text: 'Gráficos de Análise da Rede',
      color: '#ffffff', // Cor do título do gráfico (se usar o title do plugin)
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff', // Cor dos labels do eixo X
      },
    },
    y: {
      ticks: {
        color: '#ffffff', // Cor dos labels do eixo Y
      },
    },
  },
};


type Comodo = {
  nome: string;
  sinal: string;
  velocidade: string;
  date: string;
};

function Graficos() {
  const [comodos, setComodos] = useState<Comodo[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('comodos');
    if (savedData) {
      setComodos(JSON.parse(savedData));
    }
  }, []);

  const data = {
    labels: comodos.map(c => c.nome),
    datasets: [
      {
        label: 'Intensidade do Sinal',
        data: comodos.map(c => parseFloat(c.sinal)),
        backgroundColor: '#ffffff',
      },
      {
        label: 'Velocidade',
        data: comodos.map(c => parseFloat(c.velocidade)),
        backgroundColor: 'rgba(97, 255, 49, 0.6)',
      },
    ],
  };

  const handleExport = () => {
    const csvHeader = "Nome,Sinal,Velocidade,Data\n";
    const csvRows = comodos.map(c =>
      `${c.nome},${c.sinal},${c.velocidade}`
    );
    const csv = csvHeader + csvRows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "dados_rede.csv");
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', paddingTop: '50px' }}>
      <h2 style={{
        textAlign: 'center',
        margin: '30px, auto, auto, auto',
        padding: 'auto, auto, auto, 30px'
      }}>Gráficos de Análise da Rede</h2>
      <Bar data={data} options={options} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CustomButton onClick={handleExport} label='Exportar Dados'></CustomButton>
      </div>
    </div>
  );
}

export default Graficos;
