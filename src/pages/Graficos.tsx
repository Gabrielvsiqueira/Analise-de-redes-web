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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Comodo = {
  nome: string;
  sinal: string;
  velocidade: string;
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

  return (
    <div style={{ width: '100%', margin: '0 auto', paddingTop: '50px' }}>
      <h2 style={{
        textAlign: 'center',
        margin: '30px, auto, auto, auto',
        padding: 'auto, auto, auto, 30px'
      }}>Gráficos de Análise da Rede</h2>
      <Bar data={data} />
    </div>
  );
}

export default Graficos;
