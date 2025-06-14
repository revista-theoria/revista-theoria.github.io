class Numero extends HTMLElement {
  static get observedAttributes() {
    return ['enlace', 'imagen', 'numero'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('a').addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    // Limpiar event listener al eliminar el componente
    this.shadowRoot.querySelector('a').removeEventListener('click', this.handleClick);
  }

  attributeChangedCallback() {
    this.render();
  }

  handleClick(event) {
    const numero = this.getAttribute('numero');
    if (numero) {
      localStorage.setItem('numeroEdicion', numero);
    }
  }

  render() {
    const enlace = 'visualizar.html';
    const imagen = this.getAttribute('imagen') || '';
    const numero = this.getAttribute('numero') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 25%; /* Ancho para 3 por fila (con márgenes) */
          margin: 1.5%;
          box-sizing: border-box;
        }
        
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
        
        img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 768px) {
          :host {
            width: 70%;
          }
        }
        @media (max-width: 480px) {
          :host {
            width: 70%;
          }
        }
      </style>
      <a href="${enlace}" data-numero="${numero}">
        <img src="${imagen}" alt="Número ${numero} de revista">
      </a>
    `;
  }
}

customElements.define('componente-numero', Numero);