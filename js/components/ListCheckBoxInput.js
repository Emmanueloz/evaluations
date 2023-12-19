import { RadioInput } from "./RadioInput.js";

export class ListCheckBoxInput extends HTMLElement {
  id = this.getAttribute("id");
  countCheckBoxInput = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.addCheckBoxInput();
    }
  }

  sumCountCheckBoxInput() {
    this.countCheckBoxInput++;
    console.log(this.countCheckBoxInput);
  }

  resCountCheckBoxInput() {
    this.countCheckBoxInput--;
    console.log(this.countCheckBoxInput);
  }

  addCheckBoxInput() {
    console.log("agregar CheckBox input");
    this.sumCountCheckBoxInput();
    this.list.append(new RadioInput(this, "checkbox"));
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>
          @import "../../css/ListRadioInput.css";
        </style>
        <section id="${this.id}">
          <ul id="list">
          </ul>
          <div>
            <button>Agregar</button>
          </div>
        </section> 
    `;

    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
    this.list = this.shadowRoot.querySelector("#list");
    this.addCheckBoxInput();
  }
  disconnectedCallback() {}
}
