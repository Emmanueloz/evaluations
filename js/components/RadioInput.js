export class RadioInput extends HTMLElement {
  inputValue = "Opción";
  constructor(listRadioInput, typeInput) {
    super();
    this.listRadioInput = listRadioInput;
    this.typeInput = typeInput;
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.deleteRadioInput();
    } else if (event.type === "input") {
      this.handleOnInput(event);
    }
  }

  handleOnInput(e) {
    this.inputValue = e.target.value;
  }

  deleteRadioInput() {
    if (this.listRadioInput.countInput == 1) {
      return;
    }
    this.listRadioInput.resCountInput();
    console.log(this.listRadioInput.countInput);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      @import "../../css/RadioInput.css";
    </style>
    <li>
        <input type="${this.typeInput}" disabled>
        <input id="answer" type="text" value="${this.inputValue}" >
        <button type="button" >Eliminar</button>
    </li>
    `;
    this.input = this.shadowRoot.querySelector("#answer");
    this.button = this.shadowRoot.querySelector("button");
    this.input.addEventListener("input", this);
    this.button.addEventListener("click", this);
  }
  disconnectedCallback() {
    this.button.removeEventListener("click", this);
  }
}
