import { ContextListQuestion } from "./context/contextListQuestion.js";
import { RadioInput } from "./components/RadioInput.js";
import { ListRadioInput } from "./components/ListRadioInput.js";
import { ListCheckBoxInput } from "./components/ListCheckBoxInput.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { TextAreaInput } from "./components/TextAreaInput.js";

customElements.define("radio-input", RadioInput);
customElements.define("text-area-input", TextAreaInput);
customElements.define("list-radio-input", ListRadioInput);
customElements.define("list-checkbox-input", ListCheckBoxInput);
customElements.define("question-editor", QuestionEditor);
const listQuestion = document.getElementById("ListQuestion");
const btnAddQuestion = document.getElementById("btnAddQuestion");
const btnSave = document.getElementById("btnSave");
console.log(ContextListQuestion.countQuestion);

btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  console.log(ContextListQuestion.countQuestion);
  listQuestion.append(question);
});

const evaluation = {
  title: "",
  questions: [],
};

btnSave.addEventListener("click", () => {
  evaluation.questions = [];
  for (const [key, value] of Object.entries(listQuestion.children)) {
    const objectQuestion = value.dataQuestion();
    objectQuestion.id = key;
    evaluation.questions.push(objectQuestion);
  }

  console.log(evaluation);
});
