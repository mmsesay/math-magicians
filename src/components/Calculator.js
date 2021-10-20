import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('');
  const [dataObject, setDataObject] = useState();
  const [result, setResult] = useState('');

  const operators = '+-x÷%';
  const numbers = '0123456789';

  const handleValues = (event) => {
    /* validate if we got a operator as first value. set that value to the first
    other set the operator */

    if (operators.includes(event.target.name)) {
      if (firstValue === '') {
        setFirstValue(event.target.name);
      } else {
        setOperator(event.target.name);
      }
      setResult(`${result}${event.target.name}`);
    }

    if (numbers.includes(event.target.name)) {
      // validate for emp
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

    console.log(dataObject);
    if (firstValue && secondValue && operator) {
      const response = calculate(dataObject, event.target.name);
      if (response) {
        console.log(response);
        setFirstValue(response.total);
        setSecondValue(response.next);
        setOperator(response.operation);

        // set the total result if both next and operation are null
        if (response.next === null && response.operation === null) {
          setResult(`${response.total || ''}`);
        }

        // check for dot and display the result
        if (response.next !== null) {
          setResult(`${response.next || ''}`);
        }
      }
    }
  };

  useEffect(() => {
    const newDataObject = {
      total: firstValue,
      next: secondValue,
      operation: operator,
    };
   
    setDataObject(newDataObject);
  }, [firstValue, secondValue, operator]);

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