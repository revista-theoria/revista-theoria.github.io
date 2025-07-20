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
            <section id="convocatoria">
                <div className="informacion">
                    <p>
                        Con cada nueva convocatoria compartiremos, a modo de detonador, un breve párrafo que pueda ayudar a aquellos que necesiten inspiración para crear una obra. Seguirlo es completamente opcional y esto no influirá en el proceso de selección de los trabajos.
                        El detonador de la edición de invierno de 2025, <span className="titulo">Ecos</span>, es el siguiente:
                        <p className="detonador">
                            Cada obra es, de algún modo, un retrato inconsciente del pasado propio y ajeno, de aquel elemento que habita en las cosas breves. Aquellas frases que no se extinguen al pronunciarse, sino que quedan suspendidas en la memoria, como una botella perdida en el mar, viajando en olas suaves. Estos retratos retribuyen al mundo un pequeño fragmento del autor, una respuesta que se transforma en llamado mediante palabras, gestos, colores y sensaciones: huellas vivas que, pacientes y solidarias, nos permiten ocupar un lugar en nuestra propia realidad. Un mismo universo, un mismo mensaje que se expande, se transforma y se diluye cada vez que alcanza a otra persona, en cualquier tiempo.
                        </p>
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
            </section>
            <Footer />
        </main>
    );
}

export default Convocatoria;
