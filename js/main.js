import { ContextListQuestion } from "./context/contextListQuestion.js";
import { InputItem } from "./components/InputItem.js";
import { ListRadioItem } from "./components/ListRadioInput.js";
import { ListCheckBoxInput } from "./components/ListCheckBoxInput.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { TextAreaInput } from "./components/TextAreaInput.js";

// Definición de custom elements
customElements.define("radio-input", InputItem);
customElements.define("text-area-input", TextAreaInput);
customElements.define("list-radio-input", ListRadioItem);
customElements.define("list-checkbox-input", ListCheckBoxInput);
customElements.define("question-editor", QuestionEditor);

// Definición de elementos en el html
const titleValue = document.getElementById("title");
const listQuestion = document.getElementById("ListQuestion");
const btnAddQuestion = document.getElementById("btnAddQuestion");
const btnSave = document.getElementById("btnSave");
//console.log(ContextListQuestion.countQuestion);

// Evento para agregar un nuevo editor de pregunta
btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  //console.log(ContextListQuestion.countQuestion);
  listQuestion.append(question);
});

// Objeto base para guardar
const evaluation = {
  title: "",
  questions: [],
};

// botón de lógica para guardar los datos
btnSave.addEventListener("click", () => {
  evaluation.questions = [];
  for (const [key, value] of Object.entries(listQuestion.children)) {
    if (value.id === "dataEvaluation") {
      continue;
    }
    const objectQuestion = value.dataQuestion();
    objectQuestion.id = key;
    evaluation.title = titleValue.value;
    evaluation.questions.push(objectQuestion);
  }

  console.log(evaluation);
});
