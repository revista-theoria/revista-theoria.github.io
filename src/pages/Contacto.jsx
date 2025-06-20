import Header from "../components/Header.jsx"
import Enlaces from "../components/Enlaces.jsx";
import Footer from "../components/Footer.jsx";
import "../css/Contacto.css";

function Contacto() {
    return (
        <main>
            <Header />
            <Enlaces />
            <div className="contacto">
                <div className="descripcion">
                    <p>
                        Agradecemos su interés en contactarnos.
                    </p>
                    <p>
                        Si desea colaborar con nosotros, puede compartirnos su trabajo aquí:
                    </p>
                </div>
                <div class="formulario">
                    <iframe
                        title="Formulario para envío de colaboraciones"
                        src="https://docs.google.com/forms/d/e/1FAIpQLScjXqIFHEGTI7vLZ9KEuNqXc4FquWSbCsN2GYyyQ9nOd_J9VQ/viewform?embedded=true"
                    />
                </div>

                <div class="descripcion">
                    <p>
                        Si desea preguntarnos algo o adquirir una de nuestras ediciones físicas, puede hacerlo a través del siguiente formulario:
                    </p>
                </div>
                <div class="formulario-general">
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

                        <input type="hidden" name="_next" value="https://revista-theoria.github.io/contacto" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Contacto;
