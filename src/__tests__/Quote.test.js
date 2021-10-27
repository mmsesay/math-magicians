import { render, screen } from '@testing-library/react';
import { Quote } from '../components';

describe('Tests Quote page', () => {
  test('Checking the existence of the paragraph', () => {
    render(<Quote />);
    const paragraphParent = screen.getByTestId('paragraph-parent');
    expect(paragraphParent).toContainHTML('P');
  });
});