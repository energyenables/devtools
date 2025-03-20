import React from 'react';
import { render } from '@testing-library/react';
import Panel from '../Panel';
import './setup';

describe('Panel component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Panel />);
    expect(container).toBeTruthy();
  });
});
