import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogPostDetailsHero from './BlogPostDetailsHero';
import { timestampToDate } from '../../../utils/timeSpanToDate';

// Mock timestampToDate function
vi.mock('../../../utils/timeSpanToDate', () => ({
  timestampToDate: vi.fn().mockImplementation((timestamp) => `Formatted Date: ${timestamp}`)
}));

describe('BlogPostDetailsHero Component', () => {
  const defaultProps = {
    title: 'Test Title',
    imageUrl: 'test-image.jpg',
    category: 'Test Category',
    authorName: 'Author Name',
    commentsCount: 5,
    likesCount: 10,
    createdOn: '2023-08-06',
    updatedOn: '2023-08-07',
  };

  it('renders blog post details correctly with provided props', () => {
    render(<BlogPostDetailsHero {...defaultProps} />);

    // Check if title is rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    // Check if category is rendered
    expect(screen.getByText('Category: Test Category')).toBeInTheDocument();
    // Check if author name is rendered
    expect(screen.getByText('by Author Name')).toBeInTheDocument();
    // Check if created and updated dates are rendered
    expect(screen.getByText('Created On: Formatted Date: 2023-08-06')).toBeInTheDocument();
    expect(screen.getByText('Updated On: Formatted Date: 2023-08-07')).toBeInTheDocument();
    // Check if comments and likes counts are rendered
    expect(screen.getByText('5 Comments')).toBeInTheDocument();
    expect(screen.getByText('10 Likes')).toBeInTheDocument();
  });

  it('renders default image when no imageUrl is provided', () => {
    render(<BlogPostDetailsHero {...{ ...defaultProps, imageUrl: null }} />);
    
    // Check if background image URL is the default one
    const section = screen.getAllByRole('banner'); // Assuming <section> is a banner
    expect(section).toHaveStyle(`backgroundImage: url(/img/blog/blog-2.jpg)`);
  });

  it('renders the provided image URL when imageUrl is provided', () => {
    render(<BlogPostDetailsHero {...defaultProps} />);
    
    // Check if background image URL is the provided one
    const section = screen.getByRole('banner'); // Assuming <section> is a banner
    expect(section).toHaveStyle(`backgroundImage: url(${defaultProps.imageUrl}`);
  });

  it('formats dates using timestampToDate utility function', () => {
    render(<BlogPostDetailsHero {...defaultProps} />);

    // Verify that timestampToDate was called with the correct timestamps
    expect(timestampToDate).toHaveBeenCalledWith('2023-08-06');
    expect(timestampToDate).toHaveBeenCalledWith('2023-08-07');
  });
});
