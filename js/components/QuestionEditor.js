import { ContextListQuestion } from "../context/contextListQuestion.js";

export class QuestionEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  /**
   *
   * @param {*} event
   */
  handleEvent(event) {
    if (event.type === "change") {
      this.handleOnSelect(event);
    } else if (event.type === "click") {
      this.deleteQuestion();
    }
  }

  handleOnSelect(e) {
    this.answersContainer.innerHTML = `${e.target.value}`;
  }

  deleteQuestion() {
    if (ContextListQuestion.countQuestion == 1) {
      return;
    }
    ContextListQuestion.resCountQuestion();
    console.log(ContextListQuestion.countQuestion);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <article>
            <input type="text" placeholder="escribe tu pregunta">
            <label for="typeQuestion">Tipo de pregunta</label>
            <select id="typeQuestion">
                <option value="opción multiple">Opción multiple</option>
                <option value="respuesta abierta">Respuesta abierta</option>
                <option value="casilla de verificación">Casilla de verificación</option>
            </select>
            <section id="answersContainer">opción multiple</section>
            <section class="btn-section-button">
              <button type="button">Eliminar</button>
            </section>
        </article>
    `;
    this.selected = this.shadowRoot.querySelector("select");
    this.answersContainer = this.shadowRoot.querySelector("#answersContainer");
    this.button = this.shadowRoot.querySelector("button");
    this.selected.addEventListener("change", this);
    this.button.addEventListener("click", this);
  }

  disconnectedCallback() {
    this.button.removeEventListener("change", this);
    this.button.removeEventListener("click", this);
  }
}
