import { ContextListRadioInput } from "../context/contextListRadioInput.js";

export class RadioInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  handleEvent(event) {
    if (event.type === "click") {
      this.deleteRadioInput();
    }
  }

  deleteRadioInput() {
    if (ContextListRadioInput.countRadioInput == 1) {
      return;
    }
    ContextListRadioInput.resCountRadioInput();
    console.log(ContextListRadioInput.countRadioInput);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
    <div>
        <input type="radio">
        <input type="text" >
        <button type="button" >Eliminar</button>
    </div>
    `;
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
  }
  disconnectedCallback() {}
}
