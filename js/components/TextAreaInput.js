export class TextAreaInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  handleEvent(event) {}

  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>
    </style>
    <textarea id="" disabled>Respuesta</textarea>
    <div>
    <input type="number">
    </div>
    `;
  }
  disconnectedCallback() {}
}
