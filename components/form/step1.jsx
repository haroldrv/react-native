import React from "react";

function Step1(props) {
  const { data } = props;
  if (data.currentStep !== 1) {
    return null;
  }

  return <h1>I am step 1</h1>;
}

export default Step1;
