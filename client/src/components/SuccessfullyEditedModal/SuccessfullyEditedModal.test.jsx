import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SuccessfullyEditedModal from './SuccessfullyEditedModal';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock useNavigate from react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('SuccessfullyEditedModal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    link: '/details-page',
  };

  it('renders correctly when isOpen is true', () => {
    const { getByText, getByRole } = render(
      <Router>
        <SuccessfullyEditedModal {...defaultProps} />
      </Router>
    );

    expect(getByText('Successfully Edited')).toBeInTheDocument();
    expect(getByRole('link', { name: /go to details page/i })).toHaveAttribute('href', '/details-page');
  });

  it('does not render when isOpen is false', () => {
    const { queryByText } = render(
      <Router>
        <SuccessfullyEditedModal {...{ ...defaultProps, isOpen: false }} />
      </Router>
    );

    expect(queryByText('Successfully Edited')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside the modal content', () => {
    const { getByRole } = render(
      <Router>
        <SuccessfullyEditedModal {...defaultProps} />
      </Router>
    );

    // Assuming the modal backdrop has the role 'dialog' or 'alertdialog'
    fireEvent.click(getByRole('dialog').parentElement);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside the modal content', () => {
    const { getByRole } = render(
      <Router>
        <SuccessfullyEditedModal {...defaultProps} />
      </Router>
    );

    // Click inside the modal content, not on the backdrop
    fireEvent.click(getByRole('button', { name: /go to details page/i }));
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('navigates to the correct link when the "Go to Details Page" link is clicked', () => {
    const navigate = vi.fn(); // Mock navigate function
    vi.mock('react-router-dom', () => ({
      useNavigate: () => navigate,
    }));

    const { getByRole } = render(
      <Router>
        <SuccessfullyEditedModal {...defaultProps} />
      </Router>
    );

    fireEvent.click(getByRole('link', { name: /go to details page/i }));
    expect(navigate).toHaveBeenCalledWith('/details-page');
  });
});
