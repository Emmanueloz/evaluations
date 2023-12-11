import { ContextListRadioInput } from "../context/contextListRadioInput.js";
import { RadioInput } from "./RadioInput.js";

export class ListRadioInput extends HTMLElement {
  id = this.getAttribute("id");
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.addRadioInput();
    }
  }
  addRadioInput() {
    console.log("agregar radio input");
    ContextListRadioInput.sumCountRadioInput();
    this.section.append(new RadioInput());
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>
          @import "../../css/ListRadioInput.css";
        </style>
        <section id="${this.id}">
          <radio-input></radio-input>
          <div>
            <button>Agregar</button>
          </div>
        </section> 
    `;

    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
    this.section = this.shadowRoot.querySelector("section");
  }
  disconnectedCallback() {}
}
