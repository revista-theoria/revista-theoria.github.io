import Header from "../components/Header.jsx";
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import Numero from "../components/Número.jsx";
import "../css/Archivo.css";

function Archivo() {
    return (
        <main>
            <Header />
            <Enlaces />
            <section id="numeros">
                <Numero imagen="Portadas/1.png" numero="1" />
            </section>
            <Footer />
        </main>
    );
}

export default Archivo;
