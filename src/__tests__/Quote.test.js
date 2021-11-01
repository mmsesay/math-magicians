import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Quote } from '../components';

describe('Tests Quote page', () => {
  test('Checking the existence of the paragraph', () => {
    render(<Quote />);
    const paragraphParent = screen.getByTestId('paragraph-parent');
    expect(paragraphParent).toContainHTML('P');
  });

  test('renders as expected', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});