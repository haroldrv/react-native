import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";

const initialForm = {
  currentStep: 1,
  numberOfSteps: 5,
  acceptConditions: false
};

function MasterForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(previousForm => ({
      ...previousForm,
      [name]: value
    }));
  }

  function next() {
    console.log("next pressed");
    let current = form.currentStep;
    current = current >= 2 ? 3 : current + 1;
    setForm(previousForm => ({
      ...previousForm,
      currentStep: current
    }));
  }

  function onSubmit() {
    console.log("form submitted");
  }

  const nextButton = (
    <button type="button" onClick={next}>
      Next
    </button>
  );

  //   function nextButton() {
  //     let { currentStep } = form;
  //     if (currentStep !== 1) {
  //       return <button type="button">Next</button>;
  //     }

  //     return null;
  //   }

  return (
    <form>
      <Step1 data={form}></Step1>
      <Step2 data={form}></Step2>

      {form.currentStep < form.numberOfSteps && nextButton}
    </form>
  );
}

export default MasterForm;
