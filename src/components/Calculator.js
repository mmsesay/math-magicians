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
  const numbers = '0123456789';

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
    <div className="bg-white w-2/6 h-2/4 rounded oveflow-hidden">
      <div className="bg-gray-500 h-1/6 flex items-center justify-end p-5">
        <p className="text-2xl text-white">{ result }</p>
      </div>
      <div className="bg-gray-400 h-5/6 grid grid-cols-4 gap-1">
        <button name="AC" onClick={handleValues} className="bg-white w-22">AC</button>
        <button name="+/-" onClick={handleValues} className="bg-white w-22">+/-</button>
        <button name="%" onClick={handleValues} className="bg-white w-22">%</button>
        <button name="÷" onClick={handleValues} className="bg-yellow-500 w-22">÷</button>
        <button name="7" onClick={handleValues} className="bg-white w-22">7</button>
        <button name="8" onClick={handleValues} className="bg-white w-22">8</button>
        <button name="9" onClick={handleValues} className="bg-white w-22">9</button>
        <button name="x" onClick={handleValues} className="bg-yellow-500 w-22">x</button>
        <button name="4" onClick={handleValues} className="bg-white w-22">4</button>
        <button name="5" onClick={handleValues} className="bg-white w-22">5</button>
        <button name="6" onClick={handleValues} className="bg-white w-22">6</button>
        <button name="-" onClick={handleValues} className="bg-yellow-500 w-22">-</button>
        <button name="1" onClick={handleValues} className="bg-white w-22">1</button>
        <button name="2" onClick={handleValues} className="bg-white w-22">2</button>
        <button name="3" onClick={handleValues} className="bg-white w-22">3</button>
        <button name="+" onClick={handleValues} className="bg-yellow-500 w-22">+</button>
        <button name="0" onClick={handleValues} className="bg-white w-22 col-span-2">0</button>
        <button name="." onClick={handleValues} className="bg-white w-22">.</button>
        <button name="=" onClick={handleValues} className="bg-yellow-500 w-22">=</button>
      </div>
    </div>
  );
};