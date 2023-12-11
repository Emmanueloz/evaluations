import { RadioInput } from "./RadioInput.js";

export class ListRadioInput extends HTMLElement {
  id = this.getAttribute("id");
  countRadioInput = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.addRadioInput();
    }
  }

  sumCountRadioInput() {
    this.countRadioInput++;
    console.log(this.countRadioInput);
  }

  resCountRadioInput() {
    this.countRadioInput--;
    console.log(this.countRadioInput);
  }

  addRadioInput() {
    console.log("agregar radio input");
    this.sumCountRadioInput();
    this.list.append(new RadioInput(this));
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
    this.addRadioInput();
  }
  disconnectedCallback() {}
}
