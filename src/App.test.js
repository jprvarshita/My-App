import { render, screen } from '@testing-library/react';
import App from './App';
import initializeTimes from "./App"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

