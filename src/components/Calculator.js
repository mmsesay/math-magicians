import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');
  const [dataObject, setDataObject] = useState();
  const [result, setResult] = useState('');
  const [isCalculate, setIsCalculate] = useState(false);

  const operators = '+-x÷%';
  const numbers = '.0123456789';

  const handleValues = (event) => {
    if (operators.includes(event.target.name)) {
      if (firstValue === '') {
        setFirstValue(event.target.name);
      } else {
        setOperator(event.target.name);
      }
      setResult(`${result}${event.target.name}`);
    } 
    
    if (numbers.includes(event.target.name)) {
      // validate for an operation
      if (dataObject.operation === '') {
        // set the firstValue if we have non else concatenate the existing with new value
        if (firstValue === '') {
          setFirstValue(event.target.name);
        } else if (firstValue) {
          setFirstValue(`${firstValue}${event.target.name}`);
        }
      } else {
        setSecondValue(event.target.name);
      }
      setResult(`${result}${event.target.name}`);
    }

    // reset the result and force reload the browser
    if (event.target.name === 'AC') {
      setResult('');
      window.location.reload(true);
    }

    if (isCalculate) {
      const response = calculate(dataObject, event.target.name);
      if (response) {
        // set the total result if both next and operation are null
        if (response.next === null && response.operation === null) {
          setResult(`${response.total || ''}`);
        }

        // validate we have all null response, reset the result and isCalculate  
        if (!response.total && !response.next && !response.operation) {
          setResult('');
          setIsCalculate(false);
        }
        
        // check for dot in the next value and display the exact value
        if (response.next) {
          setResult(`${response.next || ''}`);
        }

        // update the state of the values
        setFirstValue(response.total);
        setSecondValue(response.next);
        setOperator(response.operation);
      }
    }
  };

  useEffect(() => {
    // create a new data object
    const newDataObject = {
      total: firstValue,
      next: secondValue,
      operation: operator,
    };

    // update the data object state
    setDataObject(newDataObject);

    // validate the object have valid data and update the isCalculate state to perfom it calculation
    if (newDataObject.total && newDataObject.next && newDataObject.operation) {
      setIsCalculate(true);
    }
  }, [firstValue, secondValue, operator, isCalculate]);

  return (
    <div className="flex justify-between w-full h-auto my-24 py-10 px-20">
      <h1 data-testid='title' className="w-1-2 text-4xl font-bold text-gray-300">Let&apos;s do some math!</h1>
      <div data-testid='container' className="bg-white w-1-2 h-auto p-3 oveflow-hidden shadow-4xl rounded-md">
        <div className="bg-gray-500 h-20 flex items-center justify-end p-5">
          <p className="text-3xl text-white font-bold">{ result }</p>
        </div>
        <div className="bg-gray-300 shadow-2xl p-2 h-auto grid grid-cols-4 gap-1 font-bold text-lg">
          <button 
            data-testid='keypad-button' name="AC" 
            onClick={handleValues} 
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:rounded hover:shadow-xl">AC</button>
          <button 
            data-testid='keypad-button' name="+/
            " onClick={handleValues} 
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">+/-</button>
          <button 
            data-testid='keypad-button' name="%"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">%</button>
          <button 
            data-testid='keypad-button' name="÷"
            onClick={handleValues}
            className="bg-yellow-500 w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">÷</button>
          <button 
            data-testid='keypad-button' name="7"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">7</button>
          <button 
            data-testid='keypad-button' name="8"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">8</button>
          <button 
            data-testid='keypad-button' name="9"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">9</button>
          <button 
            data-testid='keypad-button' name="x"
            onClick={handleValues}
            className="bg-yellow-500 w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">x</button>
          <button 
            data-testid='keypad-button' name="4"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">4</button>
          <button 
            data-testid='keypad-button' name="5"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">5</button>
          <button 
            data-testid='keypad-button' name="6"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">6</button>
          <button 
            data-testid='keypad-button' name="-"
            onClick={handleValues}
            className="bg-yellow-500 w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">-</button>
          <button 
            data-testid='keypad-button' name="1"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">1</button>
          <button 
            data-testid='keypad-button' name="2"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">2</button>
          <button 
            data-testid='keypad-button' name="3"
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">3</button>
          <button 
            data-testid='keypad-button' name="+"
            onClick={handleValues}
            className="bg-yellow-500 w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">+</button>
          <button 
            data-testid='keypad-button' name="0"
            onClick={handleValues}
            className="bg-white h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl col-span-2">0</button>
          <button 
            data-testid='keypad-button' name="."
            onClick={handleValues}
            className="bg-white w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">.</button>
          <button 
            data-testid='keypad-button' name="="
            onClick={handleValues}
            className="bg-yellow-500 w-22 h-20 focus:outline-none border-2 hover:border-gray-300 hover:shadow-xl">=</button>
        </div>
      </div>
    </div>
  );
};