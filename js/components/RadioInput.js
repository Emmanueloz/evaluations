export class RadioInput extends HTMLElement {
  constructor(listRadioInput, typeInput) {
    super();
    this.listRadioInput = listRadioInput;
    this.typeInput = typeInput;
    this.attachShadow({ mode: "open" });
  }
  handleEvent(event) {
    if (event.type === "click") {
      this.deleteRadioInput();
    }
  }

  deleteRadioInput() {
    if (this.listRadioInput.countRadioInput == 1) {
      return;
    }
    this.listRadioInput.resCountRadioInput();
    console.log(this.listRadioInput.countRadioInput);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      @import "../../css/RadioInput.css";
    </style>
    <li>
        <input type="${this.typeInput}" disabled>
        <input type="text" placeholder="Opción" >
        <button type="button" >Eliminar</button>
    </li>
    `;
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
  }
  disconnectedCallback() {}
}
