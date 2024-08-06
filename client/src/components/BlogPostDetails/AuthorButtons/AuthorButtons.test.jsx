import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AuthorButtons from './AuthorButtons';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDeletePost } from '../../../hooks/useBlogPosts';

// Mock styles import using importOriginal helper
vi.mock('./AuthorButtons.module.css', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    authButtons: 'authButtons', // Ensure you mock all necessary class names
  };
});

// Mock useDeletePost hook
vi.mock('../../../hooks/useBlogPosts', () => ({
  useDeletePost: vi.fn(),
}));

describe('AuthorButtons Component', () => {
  const defaultProps = {
    itemTitle: 'Sample Post',
    itemId: '1',
  };

  it('renders edit and delete buttons correctly', () => {
    render(
      <Router>
        <AuthorButtons {...defaultProps} />
      </Router>
    );

    // Check if Edit button is rendered
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    // Check if Delete button is rendered
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
  });

  it('opens delete confirmation modal when delete button is clicked', async () => {
    render(
      <Router>
        <AuthorButtons {...defaultProps} />
      </Router>
    );

    // Click the Delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Check if Delete confirmation modal is opened
    await waitFor(() => expect(screen.getByText(/Are you sure you want to delete/i)).toBeInTheDocument());
  });

  it('calls the delete handler when the delete is confirmed', async () => {
    const deleteHandlerMock = vi.fn().mockResolvedValue(true);
    useDeletePost.mockReturnValue([null, deleteHandlerMock]);

    render(
      <Router>
        <AuthorButtons {...defaultProps} />
      </Router>
    );

    // Click the Delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Click the Confirm button in the modal
    fireEvent.click(screen.getByText(/Confirm/i));

    // Wait for the delete handler to be called
    await waitFor(() => expect(deleteHandlerMock).toHaveBeenCalledWith(defaultProps.itemId));
  });

  it('closes delete confirmation modal when cancel is clicked', async () => {
    render(
      <Router>
        <AuthorButtons {...defaultProps} />
      </Router>
    );

    // Click the Delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Click the Cancel button in the modal
    fireEvent.click(screen.getByText(/Cancel/i));

    // Check if Delete confirmation modal is closed
    await waitFor(() => expect(screen.queryByText(/Are you sure you want to delete/i)).not.toBeInTheDocument());
  });

  it('opens success modal when delete is successful', async () => {
    const deleteHandlerMock = vi.fn().mockResolvedValue(true);
    useDeletePost.mockReturnValue([null, deleteHandlerMock]);

    render(
      <Router>
        <AuthorButtons {...defaultProps} />
      </Router>
    );

    // Click the Delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Click the Confirm button in the modal
    fireEvent.click(screen.getByText(/Confirm/i));

    // Wait for the success modal to open
    await waitFor(() => expect(screen.getByText(/Successfully deleted/i)).toBeInTheDocument());
  });
});
