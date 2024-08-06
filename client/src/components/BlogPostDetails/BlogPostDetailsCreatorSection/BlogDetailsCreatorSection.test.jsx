import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogDetailsCreatorSection from './BlogPostDetailsCreatorSection';

// Mock styles import (if needed)
vi.mock('./BlogDetailsCreatorSection.module.css', () => ({
  blogDetailsAuthor: 'blogDetailsAuthor',
  baPic: 'baPic',
  baText: 'baText',
  bpSocial: 'bpSocial',
}));

describe('BlogDetailsCreatorSection Component', () => {
  const defaultProps = {
    name: 'Author Name',
    email: 'author@example.com',
    description: 'Author Description',
    imageUrl: 'author-image.jpg',
  };

  it('renders author details correctly with provided props', () => {
    render(<BlogDetailsCreatorSection {...defaultProps} />);

    // Check if author's name is rendered
    expect(screen.getByText('Author Name')).toBeInTheDocument();
    // Check if email is rendered
    expect(screen.getByText('Email: author@example.com')).toBeInTheDocument();
    // Check if description is rendered
    expect(screen.getByText('Author Description')).toBeInTheDocument();
    // Check if image is rendered
    expect(screen.getByRole('img')).toHaveAttribute('src', 'author-image.jpg');
  });

  it('renders social media links correctly', () => {
    render(<BlogDetailsCreatorSection {...defaultProps} />);

    // Check if social media links are rendered
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /google-plus/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /youtube-play/i })).toBeInTheDocument();
  });
});
