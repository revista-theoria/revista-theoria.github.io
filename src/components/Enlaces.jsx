import { useNavigate } from 'react-router-dom';
import "../css/Enlaces.css";

function Enlaces() {
    const navigate = useNavigate();

    return (
        <div className="contenedor-enlaces">
            <nav id="enlaces">
                <p onClick={() => navigate('/archivo')}>Archivo</p>
                <p onClick={() => navigate('/convocatoria')}>Convocatoria</p>
                <p onClick={() => navigate('/contacto')}>Contacto</p>
            </nav>
        </div>
    );
}

export default Enlaces;
