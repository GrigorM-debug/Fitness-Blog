import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header Component', () => {
  it('should render the header and all elements', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the header section is rendered
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Check for logo
    expect(screen.getByAltText('')).toBeInTheDocument();

    // Check if the navigation and top options are present (for initial render)
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/TopOptions/i)).toBeInTheDocument(); // Ensure TopOptions is rendered
  });

  it('should toggle off-canvas menu on click', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the off-canvas menu is not open initially
    expect(screen.queryByRole('dialog')).toBeNull();

    // Click to open the off-canvas menu
    fireEvent.click(screen.getByText(/menu/i)); // Adjust if you use different text

    // Check if the off-canvas menu is open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should handle window resize and toggle navigation visibility', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Simulate window resize to smaller width
    global.innerWidth = 800;
    global.dispatchEvent(new Event('resize'));

    // Check if normal navigation is hidden
    expect(screen.queryByRole('navigation')).toBeNull();

    // Simulate window resize to larger width
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));

    // Check if normal navigation is shown again
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should call handleLogoutClick when logout button is clicked', () => {
    const handleLogoutClick = vi.fn();
    
    render(
      <Router>
        <Header handleLogoutClick={handleLogoutClick} />
      </Router>
    );

    // Check for TopOptions with a logout button
    const topOptions = screen.getByText(/TopOptions/i).closest('div');
    const logoutButton = within(topOptions).getByText(/Logout/i); // Adjust selector if needed

    // Click the logout button
    fireEvent.click(logoutButton);

    // Ensure handleLogoutClick is called
    expect(handleLogoutClick).toHaveBeenCalled();
  });
});
