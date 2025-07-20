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
                        Si deseas colaborar con nosotros, puedes compartirnos tu trabajo aquí:
                    </p>
                </div>
                <div className="formulario">
                    <iframe
                        title="Formulario para envío de colaboraciones"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSc-J1w2F4mnPzjHS7wFM8aZi-Bv8D2kpGt3CA4aBt8VoKv6Cg/viewform?embedded=true"
                    />
                </div>

                <div className="descripcion">
                    <p>
                        Si deseas preguntarnos algo, puedes hacerlo a través del siguiente formulario o enviándonos un mensaje a nuestro Instagram:
                    </p>
                </div>
                <div className="formulario-general">
                    <form id="form" method="POST" action="https://formsubmit.co/re.theoria@gmail.com">
                        <div class="input">
                            <div>
                                <input type="text" name="nombre" placeholder="Nombre" required />
                            </div>
                            <div>
                                <input type="email" name="correo" placeholder="Correo electrónico" required />
                            </div>
                        </div>
                    
                        <textarea id="mensaje" name="mensaje" rows="5" placeholder="Mensaje" required></textarea>
                    
                        <button type="submit">Enviar</button>

                        <input type="hidden" name="_next" value="revista-theoria.github.io/#/contacto" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Contacto;
