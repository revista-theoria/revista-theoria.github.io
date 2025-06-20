import { useNavigate } from 'react-router-dom';
import "../css/Numero.css";

function Numero({ imagen, numero }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (numero) {
            localStorage.setItem('numeroEdicion', numero);
            navigate('/visualizar');
        }
    };

    return (
        <div className="numero">
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={imagen} alt={`Número ${numero} de la revista`} />
            </div>
        </div>
    );
}

export default Numero;
