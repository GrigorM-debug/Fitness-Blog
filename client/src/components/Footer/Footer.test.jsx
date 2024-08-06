import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import UserContext from '../../contexts/userContext';

// Mock user context data
const mockUserContext = (isAuthenticated) => ({
  contextData: { isAuthenticated },
});

describe('Footer Component', () => {
  it('should render footer with all sections', () => {
    render(
      <UserContext.Provider value={mockUserContext(false)}>
        <Router>
          <Footer />
        </Router>
      </UserContext.Provider>
    );

    // Check if the footer sections are rendered
    expect(screen.getByText(/useful links/i)).toBeInTheDocument();
    expect(screen.getByText(/user links/i)).toBeInTheDocument();
    expect(screen.getByText(/socials/i)).toBeInTheDocument();

    // Check for specific links
    expect(screen.getByText(/Our Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Healthy Recipes/i)).toBeInTheDocument();
    expect(screen.getByText(/BMI Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it('should render user links for guests', () => {
    render(
      <UserContext.Provider value={mockUserContext(false)}>
        <Router>
          <Footer />
        </Router>
      </UserContext.Provider>
    );

    // Check if guest links are rendered
    const userLinks = within(screen.getByText(/user links/i).closest('div'));
    expect(userLinks.getByText(/Register/i)).toBeInTheDocument();
    expect(userLinks.getByText(/Login/i)).toBeInTheDocument();
  });

  it('should render user links for authenticated users', () => {
    render(
      <UserContext.Provider value={mockUserContext(true)}>
        <Router>
          <Footer />
        </Router>
      </UserContext.Provider>
    );

    // Check if authenticated user links are rendered
    const userLinks = within(screen.getByText(/user links/i).closest('div'));
    expect(userLinks.getByText(/My Profile/i)).toBeInTheDocument();
    expect(userLinks.getByText(/Logout/i)).toBeInTheDocument();
  });

  it('should render social media links', () => {
    render(
      <UserContext.Provider value={mockUserContext(false)}>
        <Router>
          <Footer />
        </Router>
      </UserContext.Provider>
    );

    // Check if social media links are rendered
    const socialLinks = screen.getByText(/socials/i).closest('div');
    expect(within(socialLinks).getByText(/Facebook/i)).toBeInTheDocument();
    expect(within(socialLinks).getByText(/Twitter/i)).toBeInTheDocument();
    expect(within(socialLinks).getByText(/Youtube/i)).toBeInTheDocument();
    expect(within(socialLinks).getByText(/Istagram/i)).toBeInTheDocument();
  });
});
