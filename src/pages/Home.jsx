import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Home.css";

function Home() {
    const navigate = useNavigate();

    const guardarNumero = (numero) => {
        localStorage.setItem('numeroEdicion', numero);
        navigate('visualizar');
    }

    return (
        <main>
            <Header />
            <Enlaces />
            <div className="destacado">
                <div className="contenedor-destacado">
                    <h3>Número más reciente</h3>
                    <div className="numero">
                        <img src="Portadas/1.png" alt="Número de junio de 2025" onClick={() => guardarNumero(1)} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
