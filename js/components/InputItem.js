export class InputItem extends HTMLElement {
  inputValue = "Opción";

  constructor(listInput, typeInput) {
    super();
    this.listInput = listInput;
    this.typeInput = typeInput;
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.deleteInputItem();
    } else if (event.type === "input") {
      this.handleOnInput(event);
    }
  }

  handleOnInput(e) {
    this.inputValue = e.target.value;
  }

  deleteInputItem() {
    if (this.listInput.countInput == 1) {
      return;
    }
    this.listInput.resCountInput();
    console.log(this.listInput.countInput);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      @import "../../css/InputItem.css";
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