import React, { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstNumber") setFirstNumber(value);
    if (name === "operator") setOperator(value);
    if (name === "secondNumber") setSecondNumber(value);
  };

  const calculateResult = (e) => {
    e.preventDefault();
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
    }
    setResult(res);
  };

  return (
    <div>
      <form onSubmit={calculateResult}>
        <input
          type="number"
          name="firstNumber"
          value={firstNumber}
          onChange={handleInputChange}
          placeholder="First number"
        />
        <select name="operator" value={operator} onChange={handleInputChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          name="secondNumber"
          value={secondNumber}
          onChange={handleInputChange}
          placeholder="Second number"
        />
        <button>=</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;
