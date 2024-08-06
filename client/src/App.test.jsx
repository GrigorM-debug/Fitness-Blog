import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders Home component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument(); // Assuming Home component contains "home" text
  });

  it('renders BlogPosts component on /blog route', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/blog posts/i)).toBeInTheDocument(); // Assuming BlogPosts component contains "blog posts" text
  });

  it('renders HealthyRecipes component on /healthyRecipes route', () => {
    render(
      <MemoryRouter initialEntries={['/healthyRecipes']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/healthy recipes/i)).toBeInTheDocument(); // Assuming HealthyRecipes component contains "healthy recipes" text
  });

  it('renders NotFound component on invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/not found/i)).toBeInTheDocument(); // Assuming NotFound component contains "not found" text
  });

  it('shows and hides the logout modal', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Click logout button
    fireEvent.click(screen.getByText(/logout/i)); // Assuming the logout button contains "logout" text
    expect(screen.getByText(/Are you sure you want to Log out?/i)).toBeInTheDocument(); // Assuming the AlertModal contains this text

    // Close modal
    fireEvent.click(screen.getByText(/close/i)); // Assuming the modal close button contains "close" text
    expect(screen.queryByText(/Are you sure you want to Log out?/i)).not.toBeInTheDocument();
  });
});
