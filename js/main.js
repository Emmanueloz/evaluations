import { ContextListQuestion } from "./context/contextListQuestion.js";
import { InputItem } from "./components/InputItem.js";
import { ListRadioItem } from "./components/ListRadioInput.js";
import { ListCheckBoxInput } from "./components/ListCheckBoxInput.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { TextAreaInput } from "./components/TextAreaInput.js";

customElements.define("radio-input", InputItem);
customElements.define("text-area-input", TextAreaInput);
customElements.define("list-radio-input", ListRadioItem);
customElements.define("list-checkbox-input", ListCheckBoxInput);
customElements.define("question-editor", QuestionEditor);
const listQuestion = document.getElementById("ListQuestion");
const btnAddQuestion = document.getElementById("btnAddQuestion");
const btnSave = document.getElementById("btnSave");
//console.log(ContextListQuestion.countQuestion);

btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  //console.log(ContextListQuestion.countQuestion);
  listQuestion.append(question);
});

const evaluation = {
  title: "",
  questions: [],
};

btnSave.addEventListener("click", () => {
  evaluation.questions = [];
  for (const [key, value] of Object.entries(listQuestion.children)) {
    if (value.id === "dataEvaluation") {
      continue;
    }
    const objectQuestion = value.dataQuestion();
    objectQuestion.id = key;
    evaluation.questions.push(objectQuestion);
  }

  console.log(evaluation);
});
