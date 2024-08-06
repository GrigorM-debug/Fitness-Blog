import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './404';  // Adjust the import path if necessary
import { describe, it, expect } from 'vitest';

describe('NotFound Component', () => {
  it('renders the Breadcrumb with the correct title', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });

  it('renders the 404 message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText('Opps! This page Could Not Be Found!')).toBeInTheDocument();
    expect(screen.getByText('Sorry bit the page you are looking for does not exist, have been removed or name changed')).toBeInTheDocument();
  });

  it('renders the Go back home link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/go back home/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/');
  });
});
