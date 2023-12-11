export class RadioInput extends HTMLElement {
  constructor(listRadioInput) {
    super();
    this.listRadioInput = listRadioInput;
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
    <div>
        <input type="radio" name="radio-input" disabled>
        <input type="text" placeholder="Opción" >
        <button type="button" >Eliminar</button>
    </div>
    `;
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
  }
  disconnectedCallback() {}
}
