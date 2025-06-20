import Header from "../components/Header.jsx";
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Visualizar.css";

function Visualizar() {
    const numeroEdicion = localStorage.getItem('numeroEdicion');
    const ruta = numeroEdicion ? `Números/${numeroEdicion}.pdf` : '';

    return(
        <main>
            <Header />
            <Enlaces />
            <div className="contenedor-visor">
                <iframe title="Número" src={ruta} />
            </div>
            <Footer />
        </main>
    );
}

export default Visualizar;
