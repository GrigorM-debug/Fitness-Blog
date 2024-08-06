import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useLocation: vi.fn(),
}));

describe('Navigation Component', () => {
  it('should render and highlight the active path based on location', () => {
    useLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navigation />
      </Router>
    );

    expect(screen.getByText('Home').parentElement).toHaveClass('active');
    expect(screen.getByText('Our Blog').parentElement).not.toHaveClass('active');
    expect(screen.getByText('Healthy Recipes').parentElement).not.toHaveClass('active');
    expect(screen.getByText('BMI Calculator').parentElement).not.toHaveClass('active');
    expect(screen.getByText('Contact').parentElement).not.toHaveClass('active');
  });

  it('should update active link on click', () => {
    useLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navigation />
      </Router>
    );

    fireEvent.click(screen.getByText('Our Blog'));

    expect(screen.getByText('Our Blog').parentElement).toHaveClass('active');
    expect(screen.getByText('Home').parentElement).not.toHaveClass('active');
  });
});
