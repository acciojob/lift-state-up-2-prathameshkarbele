
import React, { useState } from "react";
import '../styles/App.css';
import ChildComponent from "./ChildComponent";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div class="parent">
      <h1>Parent Component</h1>
      {inputValue}
      <ChildComponent
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App
