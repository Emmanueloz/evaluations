import { ContextListQuestion } from "./context/contextListQuestion.js";
import { QuestionEditor } from "./components/QuestionEditor.js";

customElements.define("question-editor", QuestionEditor);
const listQuestion = document.getElementById("ListQuestion");
const btnAddQuestion = document.getElementById("btnAddQuestion");
console.log(ContextListQuestion.countQuestion);

btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  console.log(ContextListQuestion.countQuestion);
  listQuestion.append(question);
});
