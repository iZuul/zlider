import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Title Zlider', () => {
  render(<App />);
  const titleElement = screen.getByText(/zlider/i);
  expect(titleElement).toBeInTheDocument();
});
