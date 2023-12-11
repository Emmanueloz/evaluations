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
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>
          @import "../../css/ListRadioInput.css";
        </style>
        <section id="${this.id}">
            <div>
                opción multiple
            </div>
            <button>Agregar</button>
        </section> 
    `;

    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
  }
  disconnectedCallback() {}
}
