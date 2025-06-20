import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx"
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Convocatoria.css";

function Convocatoria() {
    const navigate = useNavigate();

    return (
        <main>
            <Header />
            <Enlaces />
            <div className="convocatoria">
                <div className="informacion">
                    <p>
                        Con cada nueva convocatoria compartiremos, a modo de detonador, una palabra o frase que pueda ayudar a aquellos que necesiten inspiración para crear una obra. Utilizarlo es completamente opcional y esto no influirá en el proceso de selección de los trabajos.
                        El detonador de la edición de verano de 2025 fue "Inicios".
                    </p>

                    <p>
                        A continuación, los puntos más relevantes a considerar antes de presentarnos una obra:
                    </p>
                    <ol>
                        <li>
                            Puede colaborar cualquier persona, sin distinción.
                        </li>
                        <li>
                            Los autores conservan los derechos de sus obras.
                        </li>
                        <li>
                            Es indispensable enviar firmada la Carta de Autorización de Publicación, que podrá descargarse al final del formulario de envío de colaboraciones (en la sección <span onClick={() => navigate('/contacto')}>Contacto</span>).
                        </li>
                        <li>
                            Las obras seleccionadas podrán ser publicadas en la revista digital, en la física o en ambas.
                        </li>
                        <li>
                            Una misma persona podrá enviar varias obras (ya sea del mismo tipo o no). Procuraremos publicar una sola obra por autor en cada edición.
                        </li>
                        <li>
                            Las obras que no sean seleccionadas podrán considerarse para futuras ediciones.
                        </li>
                        <li>
                            Cada autor podrá decidir si desea firmar con su nombre real, con un seudónimo o permanecer anónimo.
                        </li>
                        <li>
                            Solicitamos que los archivos enviados sean originales. (No PDF)
                        </li>
                    </ol>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Convocatoria;
