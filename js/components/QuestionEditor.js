import { ContextListQuestion } from "../context/contextListQuestion.js";
import { ListRadioInput } from "./ListRadioInput.js";
import { ListCheckBoxInput } from "./ListCheckBoxInput.js";
import { TextAreaInput } from "./TextAreaInput.js";

const TYPE_QUESTION = {
  MULTIPLE_OPTION: "multiple-option",
  OPEN_RESPONSE: "open-response",
  CHECK_BOX: "check-box",
};

export class QuestionEditor extends HTMLElement {
  objectQuestion = {
    id: null,
    questionValue: "",
    typeQuestion: TYPE_QUESTION.MULTIPLE_OPTION,
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleInputQuestion(e) {
    this.objectQuestion.questionValue = e.target.value;
  }

  handleOnSelect(e) {
    console.log(e.target.value);
    this.answersContainer.innerHTML = "";
    if (e.target.value === TYPE_QUESTION.MULTIPLE_OPTION) {
      this.answersContainer.append(new ListRadioInput());
    } else if (e.target.value === TYPE_QUESTION.OPEN_RESPONSE) {
      this.answersContainer.append(new TextAreaInput());
    } else if (e.target.value === TYPE_QUESTION.CHECK_BOX) {
      this.answersContainer.append(new ListCheckBoxInput());
    }
    this.objectQuestion.typeQuestion = e.target.value;
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
        <style>
          @import "../../css/QuestionEditor.css";
        </style>
        <article>
          <div>
            <input id="question" type="text" placeholder="Escribe tu pregunta">
            <select id="typeQuestion">
                <option value="${TYPE_QUESTION.MULTIPLE_OPTION}">Opción multiple</option>
                <option value="${TYPE_QUESTION.OPEN_RESPONSE}">Respuesta abierta</option>
                <option value="${TYPE_QUESTION.CHECK_BOX}">Casilla de verificación</option>
            </select>
          </div>
          <section id="answersContainer">
            <list-radio-input ></list-radio-input>          
          </section>
          <section class="btn-section-button">
            <button type="button">Eliminar</button>
          </section>
        </article>
    `;
    this.question = this.shadowRoot.querySelector("#question");
    this.selected = this.shadowRoot.querySelector("select");
    this.answersContainer = this.shadowRoot.querySelector("#answersContainer");
    this.button = this.shadowRoot.querySelector("button");
    this.selected.addEventListener("change", this.handleOnSelect.bind(this));
    this.button.addEventListener("click", this.deleteQuestion.bind(this));
    this.question.addEventListener(
      "input",
      this.handleInputQuestion.bind(this)
    );
  }

  disconnectedCallback() {
    this.selected.removeEventListener("change", this.handleOnSelect.bind(this));
    this.button.removeEventListener("click", this.deleteQuestion.bind(this));
    this.question.removeEventListener(
      "input",
      this.handleInputQuestion.bind(this)
    );
  }
}
