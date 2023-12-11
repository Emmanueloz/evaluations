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
    console.log(e.target.value);
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
            <section id="answersContainer" ></section>
        </article>
    `;
    this.selected = this.shadowRoot.getElementById("typeQuestion");
    this.answersContainer = this.shadowRoot.getElementById("answersContainer");
    this.selected.addEventListener("change", this);
  }
}
