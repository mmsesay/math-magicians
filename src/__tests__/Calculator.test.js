import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Calculator } from '../components';

describe('Tests calculator components', () => {
  test('Checking DOM elements', () => {
    render(<Calculator />);
    const h1 = screen.getByText(/Let's do some math!/i);
    expect(h1).toBeInTheDocument();
  });

  test('Checking if the calculator container exists', () => {
    render(<Calculator />);
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
  });

  test('Checking if the buttons total count is 19', () => {
    render(<Calculator />);
    const numbersButtons = screen.queryAllByTestId('keypad-button');
    expect(numbersButtons).toHaveLength(19);
  });

  test('renders as expected', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
