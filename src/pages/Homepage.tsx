import Header from "../components/header";
import CustomButton from "../components/button";

import '../index.css';

function HomePage(){
    return(
        <>
        <header>
            <Header></Header>
        </header>
        <div className="container">
         <iframe className="speedTest"
        src="https://speed.cloudflare.com/"
        width="100%"
        height="420"
        frameBorder="0"
        ></iframe>
        </div>
        <a href="../MyForms" className="homeButton"><CustomButton label="Iniciar Análise"/></a>
        
        </>
    )
}
export default HomePage;