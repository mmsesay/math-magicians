import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Home } from '../components';

describe('Testing homepage', () => {
  test('Tests the existence of the the title: Welcome to our page!', () => {
    render(<Home />);
    const h1 = screen.getByText(/Welcome to our page!/);
    expect(h1).toBeInTheDocument();
  });

  test('Tests the existence of the first paragraph', () => {
    render(<Home />);
    const paragraphs = screen.queryAllByTestId('paragraph');
    expect(paragraphs).toHaveLength(2);
  });

  test('renders as expected', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});