export class QuestionEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  /**
   *
   * @param {*} event
   */
  handleEvent(event) {
    if (event.type === "change") {
      this.handleOnSelect(event);
    }
  }

  handleOnSelect(e) {
    this.answersContainer.innerHTML = `${e.target.value}`;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
        <article>
            <input type="text" placeholder="escribe tu pregunta">
            <label for="typeQuestion">Tipo de pregunta</label>
            <select id="typeQuestion">
                <option value="opción multiple">Opción multiple</option>
                <option value="respuesta abierta">Respuesta abierta</option>
                <option value="casilla de verificación">Casilla de verificación</option>
            </select>
            <section>opción multiple</section>
        </article>
    `;
    this.selected = this.shadowRoot.querySelector("select");
    this.answersContainer = this.shadowRoot.querySelector("section");
    this.selected.addEventListener("change", this);
  }

  disconnectedCallback() {
    this.button.removeEventListener("change", this);
  }
}
