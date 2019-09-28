import React from 'react';

function Step2(props) {
    const { data } = props;
    if (data.currentStep !== 2) {
      return null;
    }
  
    return <h1>I am step 2</h1>;
  }
  
  export default Step2;