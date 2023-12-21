import { BaseListInput } from "./BaseListInput.js";
export class ListRadioInput extends BaseListInput {
  constructor() {
    super("radio");
    this.countInput = 0;
  }
}
