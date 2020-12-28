import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('should render title of application', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Citation Manager/i);
  expect(linkElement).toBeInTheDocument();
});
