// Pagination.test.js

import Pagination from './Pagination'; // Adjust the import path
import { describe, it, expect, vi, render} from 'vitest';

describe('Pagination', () => {
  const mockProps = {
    handleItemsPerPage: vi.fn(),
    length: 50, // Example total number of items
    currentPage: 3, // Example current page
    onPageChange: vi.fn(),
  };

  it('renders without errors', () => {
    render(<Pagination {...mockProps} />);
    // Add assertions here (e.g., check if pagination buttons are present)
  });

  it('disables "Previous" button on first page', () => {
    const { getByText } = render(<Pagination {...mockProps} currentPage={1} />);
    const previousButton = getByText('Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables "Next" button on last page', () => {
    const { getByText } = render(<Pagination {...mockProps} currentPage={5} />);
    const nextButton = getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('activates the current page button', () => {
    const { getByText } = render(<Pagination {...mockProps} />);
    const currentPageButton = getByText('3'); // Adjust based on your current page
    expect(currentPageButton).toHaveClass('active'); // Assuming you have an "active" class for styling
  });
});
