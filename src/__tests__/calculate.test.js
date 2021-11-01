import calculate from '../logic/calculate';

test('calculate returns correct result object', () => {
  const objectArray = [
    {
      total: '4',
      next: '2',
      operation: '+', // result 6
    },
    {
      total: '6',
      next: '3',
      operation: '-', // result 3
    },
    {
      total: '3',
      next: '4',
      operation: 'x', // result 12
    },
    {
      total: '12',
      next: '5',
      operation: '÷', // result 2.4
    },
    {
      total: '12',
      next: '6',
      operation: '%', // result 0
    },
  ];

  const expectedResultArray = ['6', '3', '12', '2.4', '0'];

  objectArray.forEach((object, index) => {
    const response = calculate(object, '=');
    expect(response.total).toEqual(`${expectedResultArray[index]}`);
  });
});