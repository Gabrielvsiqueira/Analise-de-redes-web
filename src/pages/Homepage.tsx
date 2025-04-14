import Header from "../components/header";
import ButtonHomePage from "../components/button";
import '../index.css';

function HomePage(){
    return(
        <>
        <header>
            <Header></Header>
        </header>
        <div className="container">
            <div className="texto-analise">
                <p> Este projeto tem como objetivo o desenvolvimento de uma aplicação web interativa, com um frontend intuitivo, que permitirá aos usuários analisar a qualidade da rede Wi-Fi em seus ambientes.</p>
                <p> A aplicação irá identificar problemas como níveis de sinal insuficientes, baixa velocidade e interferências, proporcionando uma análise detalhada e soluções possíveis para cada cômodo da residência ou estabelecimento. </p>
            </div>
            <div className="imagens">
                <img src="../src/img/wifi-topo.png" alt="rede wifi e usuários conectados" />
                <img src="../src/img/image.webp" alt="grafico de crescimento." />
            </div>
        </div>
        <ButtonHomePage text="Iniciar Análise" to="/MyForms"/>
        </>
    )
}

export default HomePage;