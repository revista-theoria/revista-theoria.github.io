import { useNavigate } from 'react-router-dom';
import "../css/Numero.css";

function Numero({ imagen, numero }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (isIOS) {
            window.open(`https://revista-theoria.github.io/Números/${encodeURIComponent(numero)}.pdf`, '_blank');
        }
        else {
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
