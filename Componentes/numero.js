class Numero extends HTMLElement {
  static get observedAttributes() {
    return ['enlace', 'imagen'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const link = this.getAttribute('enlace') || '#';
    const image = this.getAttribute('imagen') || '';

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
      <a href="${link}" target="_blank">
        <img src="${image}" alt="Número de revista">
      </a>
    `;
  }
}

customElements.define('componente-numero', Numero);