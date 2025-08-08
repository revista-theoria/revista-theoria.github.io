import "../css/Footer.css";

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="contenido">
                    <a href="https://instagram.com/revista.theoria" target="_blank" rel="noopener noreferrer" alt="Instagram">
                        <img src="/instagram.svg" alt="Logo" />
                    </a>
                    <div className="copyright">
                        © {new Date().getFullYear()} Revista Theoria
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
