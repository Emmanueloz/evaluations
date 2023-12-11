class RadioInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  handleEvent(event) {}

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
    <div>
        <input type="radio">
        <input type="text" >
        <button type="button" >Eliminar</button>
    </div>
    `;
  }
  disconnectedCallback() {}
}
