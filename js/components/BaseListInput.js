import { RadioInput } from "./RadioInput.js";

export class BaseListInput extends HTMLElement {
  constructor(type) {
    super();
    this.attachShadow({ mode: "open" });
    this.type = type;
  }
  countInput = 0;

  dataAnswer() {
    const answers = [];
    for (const item of this.list.children) {
      answers.push(item.inputValue);
    }
    return {
      answers,
      lengthAnswers: null,
    };
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.addInput();
    }
  }

  sumCountInput() {
    this.countInput++;
    console.log(this.countInput);
  }

  resCountInput() {
    this.countInput--;
    console.log(this.countInput);
  }

  addInput() {
    console.log(`Agregar ${this.type} input`);
    this.sumCountInput();
    this.list.append(new RadioInput(this, this.type));
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
    this.addInput();
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this);
  }
}
