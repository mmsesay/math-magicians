import { render, screen } from '@testing-library/react';
import { Home } from '../components/Home';

describe('Testing homepage', () => {
  test('Tests the existence of the the title: Welcome to our page!', () => {
    render(<Home />);
    const h1 = screen.getByText(/Welcome to our page!/);
    expect(h1).toBeInTheDocument();
  });
});