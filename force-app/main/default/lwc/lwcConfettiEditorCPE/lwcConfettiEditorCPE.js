import { LightningElement, api } from "lwc";

export default class LwcConfettiEditorCPE extends LightningElement {
  _inputVariables = [];
  showError = false;

  @api
  get inputVariables() {
    return this._inputVariables;
  }

  set inputVariables(variables) {
    this._inputVariables = variables || [];
  }

  get confettiDisplayType() {
    const param = this.inputVariables.find(
      ({ name }) => name === "confettiType"
    );
    return param && param.value;
  }

  get setCannon() {
    return this.confettiDisplayType === "Cannon";
  }
  get setFireworks() {
    return this.confettiDisplayType === "Fireworks";
  }
  get setWinner() {
    return this.confettiDisplayType === "Winner";
  }
  get setBurst() {
    return this.confettiDisplayType === "Burst";
  }
  get setShower() {
    return this.confettiDisplayType === "Shower";
  }

  @api
  validate() {
    const validity = [];
    if (!this.confettiDisplayType || this.confettiDisplayType === "select") {
      this.showError = true;
      validity.push({
        key: "Confetti Type",
        errorString: "Please select a confetti type."
      });
    }
    return validity;
  }

  handleChange(event) {
    const newValue = event.currentTarget.value;
    this.showError = false;
    const valueChangedEvent = new CustomEvent(
      "configuration_editor_input_value_changed",
      {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          name: "confettiType",
          newValue,
          newValueDataType: "String"
        }
      }
    );
    this.dispatchEvent(valueChangedEvent);
  }
}
