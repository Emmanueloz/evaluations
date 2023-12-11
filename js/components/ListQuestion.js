import { QuestionEditor } from "./QuestionEditor.js";

export class ListQuestion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  handleEvent(event) {
    if (event.type == "click") {
      this.addQuestion();
    }
  }

  addQuestion() {
    const question = new QuestionEditor();
    this.article.append(question);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `    
        <div>
            <article>
                <question-editor></question-editor>
            </article>
            <section class="section-button">
                <button type="button">Agregar</button>
            </section>
        </div>
    `;

    this.button = this.shadowRoot.querySelector("button");
    this.article = this.shadowRoot.querySelector("article");
    this.button.addEventListener("click", this);
  }
}
