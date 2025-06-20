import "../css/Footer.css";

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div class="contenido">
                    <a href="https://instagram.com/revista.theoria" target="_blank" rel="noopener noreferrer" alt="Instagram">
                        <img src="instagram.svg" />
                    </a>
                    <div class="copyright">
                        © {new Date().getFullYear()} Revista Theoria
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
