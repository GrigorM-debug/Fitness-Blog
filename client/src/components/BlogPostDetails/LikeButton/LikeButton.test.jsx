import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LikeButton from './LikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';

// Mock FontAwesomeIcon to simplify testing
vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <i data-testid="icon" className={icon === solidThumbsUp ? 'fa-solid' : 'fa-regular'} />
}));

describe('LikeButton Component', () => {
  it('renders the like button with the correct icon when liked', () => {
    render(
      <LikeButton 
        likeButtonHandler={vi.fn()} 
        isLiked={true} 
        isLikeDisabled={false} 
      />
    );

    // Check if the button has the solid thumbs up icon
    expect(screen.getByTestId('icon')).toHaveClass('fa-solid');
    expect(screen.getByText(/Like/i)).toBeInTheDocument();
  });

  it('renders the like button with the correct icon when not liked', () => {
    render(
      <LikeButton 
        likeButtonHandler={vi.fn()} 
        isLiked={false} 
        isLikeDisabled={false} 
      />
    );

    // Check if the button has the regular thumbs up icon
    expect(screen.getByTestId('icon')).toHaveClass('fa-regular');
    expect(screen.getByText(/Like/i)).toBeInTheDocument();
  });

  it('renders the like button as disabled when isLikeDisabled is true', () => {
    render(
      <LikeButton 
        likeButtonHandler={vi.fn()} 
        isLiked={false} 
        isLikeDisabled={true} 
      />
    );

    // Check if the button has the disabled class
    expect(screen.getByRole('button')).toHaveClass('disabled');
    expect(screen.getByText(/Like/i)).toBeInTheDocument();
  });

  it('calls likeButtonHandler when clicked and not disabled', () => {
    const likeButtonHandler = vi.fn();

    render(
      <LikeButton 
        likeButtonHandler={likeButtonHandler} 
        isLiked={false} 
        isLikeDisabled={false} 
      />
    );

    // Click the button
    fireEvent.click(screen.getByRole('button'));
    
    // Verify the handler was called
    expect(likeButtonHandler).toHaveBeenCalled();
  });

  it('does not call likeButtonHandler when clicked and disabled', () => {
    const likeButtonHandler = vi.fn();

    render(
      <LikeButton 
        likeButtonHandler={likeButtonHandler} 
        isLiked={false} 
        isLikeDisabled={true} 
      />
    );

    // Click the button
    fireEvent.click(screen.getByRole('button'));
    
    // Verify the handler was not called
    expect(likeButtonHandler).not.toHaveBeenCalled();
  });
});
