class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Luis Eduardo Jiménez Sánchez 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
