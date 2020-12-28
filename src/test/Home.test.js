import { render, screen } from '@testing-library/react';
import HomeTitle from '../components/HomeTitle';

test('should render title of application', () => {
  render(<HomeTitle />);
  const linkElement = screen.getByText(/Citation Manager/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render description of application', () => {
  render(<HomeTitle />);
  const linkElement = screen.getByText(/Easily generate and manage your citations/i);
  expect(linkElement).toBeInTheDocument();
});
