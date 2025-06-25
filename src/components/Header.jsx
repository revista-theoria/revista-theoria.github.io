import { useNavigate } from 'react-router-dom';
import "../css/Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="contenedor-header">
            <img src="/Logo.png" onClick={() => navigate('/')} alt="Logo" />
        </div>
    );
}

export default Header;