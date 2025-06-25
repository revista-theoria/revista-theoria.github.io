import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Home.css";

function Home() {
    const navigate = useNavigate();

    const visualizar = (numero) => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (isIOS) {
            window.open(`https://revista-theoria.github.io/Números/${encodeURIComponent(numero)}.pdf`, '_blank');
        }
        else {
            navigate(`/visualizar/${numero}`);
        }
    }

    return (
        <main>
            <Header />
            <Enlaces />
            <div className="destacado">
                <div className="contenedor-destacado">
                    <h3>Número más reciente</h3>
                    <div className="numero">
                        <img src="Portadas/1.png" alt="Número de junio de 2025" onClick={() => visualizar(1)} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
