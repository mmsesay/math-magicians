import operate from '../logic/operate';

test('operate returns correct result', () => {
  const objectArray = [
    {
      numberOne: 10,
      numberTwo: 4,
      operation: '+', // result '14'
    },
    {
      numberOne: 22,
      numberTwo: 14,
      operation: '-', // result '8'
    },
    {
      numberOne: 2,
      numberTwo: 5,
      operation: 'x', // result '10'
    },
    {
      numberOne: 600,
      numberTwo: 50,
      operation: '÷', // result '12'
    },
    {
      numberOne: 12,
      numberTwo: 6,
      operation: '%', // result 0
    },
  ];

  const expectedResultArray = ['14', '8', '10', '12', '0'];

  objectArray.forEach((object, index) => {
    const response = operate(object.numberOne, object.numberTwo, object.operation);
    expect(response).toEqual(`${expectedResultArray[index]}`);
  });
});