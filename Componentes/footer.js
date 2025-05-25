class Footer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background-color: #333;
            color: white;
            padding: 1.5rem;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          
          .contenido {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            a {
                color: white;
                text-decoration: none;
                transition: color 0.3s;
            }
          }
          
          .copyright {
            font-size: 0.9rem;
            opacity: 0.8;
          }
        </style>
        
        <footer>
          <div class="contenido">
            <a href="https://instagram.com/revista.theoria" target="_blank">Instagram</a>
            <div class="copyright">
              © ${new Date().getFullYear()} Revista Theoria
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('componente-footer', Footer);