class ContextListRadioInput {
  static countRadioInput = 1;
  static sumCountRadioInput() {
    ContextListRadioInput.countRadioInput++;
  }
  static resCountRadioInput() {
    ContextListRadioInput.countRadioInput--;
  }
}

export { ContextListRadioInput };
