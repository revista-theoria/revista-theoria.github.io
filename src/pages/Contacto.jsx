import Header from "../components/Header.jsx"
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Contacto.css";

function Contacto() {
    return (
        <main>
            <Header />
            <Enlaces />
            <section id="contacto">
                <div className="descripcion">
                    <p>
                        Agradecemos tu interés en contactarnos.
                    </p>
                    <p>
                        Si deseas preguntarnos algo, puedes enviarnos un correo electrónico a re.theoria@gmail.com o un mensaje a nuestro Instagram: @revista.theoria.
                    </p>
                </div>

                <div className="descripcion">
                    <p>
                        Si deseas colaborar con nosotros, puedes compartirnos tu trabajo aquí:
                    </p>
                </div>
                <div className="formulario">
                    <iframe
                        title="Formulario para envío de colaboraciones"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc-J1w2F4mnPzjHS7wFM8aZi-Bv8D2kpGt3CA4aBt8VoKv6Cg/viewform?embedded=true"
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Contacto;
