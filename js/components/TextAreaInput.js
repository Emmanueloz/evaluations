export class TextAreaInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  handleEvent(event) {}

  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>
      @import "../../css/TextAreaInput.css";
    </style>
    <textarea id="" disabled>Respuesta</textarea>
    <div class="btn-section-button" >
    <label>
      Tamaño de la respuesta
      <input type="number" value="100"  min="50" max="500">
    </label>
    </div>
    `;
  }
  disconnectedCallback() {}
}
