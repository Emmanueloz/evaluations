import { QuestionEditor } from "./components/QuestionEditor.js";

customElements.define("question-editor", QuestionEditor);
const listQuestion = document.getElementById("ListQuestion");
const btnAddQuestion = document.getElementById("btnAddQuestion");

btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  listQuestion.append(question);
});
