import { render, screen } from '@testing-library/react';
import { Calculator } from '../components';

describe('Tests calculator components', () => {
  test('Checking DOM elements', () => {
    render(<Calculator />);
    const h1 = screen.getByText(/Let's do some math!/i);
    expect(h1).toBeInTheDocument();
  });
});
