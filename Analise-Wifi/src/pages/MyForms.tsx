import { useState } from 'react';
import Header from '../components/header';
import ButtonHomePage from '../components/button';
import '../index.css';

type Comodo = {
  nome: string;
  sinal: string;
  velocidade: string;
};

function MyForms() {
  const [comodo, setComodo] = useState({ nome: '', sinal: '', velocidade: '' });
  const [comodos, setComodos] = useState<Comodo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComodo({ ...comodo, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (comodo.nome && comodo.sinal && comodo.velocidade) {
      setComodos([...comodos, comodo]);
      setComodo({ nome: '', sinal: '', velocidade: '' }); // Limpa os campos
    }
  };

  const handleDelete = (index: number) => {
    const newList = comodos.filter((_, i) => i !== index);
    setComodos(newList);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleAdd}>
        <h3 className="header">Adicionar cômodos para análise da rede:</h3>
        <div className='container'>
          <div className='container-form'>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome do cômodo"
              value={comodo.nome}
              onChange={handleChange}
              required
            />

            <label htmlFor="sinal">Intensidade do sinal:</label>
            <input
              type="text"
              id="sinal"
              name="sinal"
              placeholder="Digite a intensidade do sinal"
              value={comodo.sinal}
              onChange={handleChange}
              required
            />

            <label htmlFor="velocidade">Velocidade:</label>
            <input
              type="text"
              id="velocidade"
              name="velocidade"
              placeholder="Digite a velocidade da rede"
              value={comodo.velocidade}
              onChange={handleChange}
              required
            />

            <ButtonHomePage type="submit" text="Adicionar" />
          </div>
        </div>
      </form>

      <div className='container'>
        <div className='container-form'>
          <h3>Cômodos adicionados:</h3>
          {comodos.length === 0 && <p>Nenhum cômodo adicionado ainda.</p>}
          <ul>
            {comodos.map((item, index) => (
              <li key={index}>
                <strong>{item.nome}</strong> - Sinal: {item.sinal} - Velocidade: {item.velocidade}
                <br />
                <ButtonHomePage
                  text="Excluir"
                  type="button"
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyForms;
