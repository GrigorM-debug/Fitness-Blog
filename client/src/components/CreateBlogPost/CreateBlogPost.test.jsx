import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CreateBlogPost from './CreateBlogPost';
import { BrowserRouter } from 'react-router-dom';

// Mock the useCreatePost hook
vi.mock('../../hooks/useBlogPosts', () => ({
  useCreatePost: () => [vi.fn(() => Promise.resolve('123')), false, {}],
}));

vi.mock('react-router', () => ({
  useNavigate: () => vi.fn(),
}));

// Ensure the icons are mocked if needed
vi.mock('@heroicons/react/24/solid', () => ({
  PhotoIcon: () => <svg data-testid="photo-icon" />,
}));

describe('CreateBlogPost Component', () => {
  let onChangeHandlerMock;
  let onSubmitHandlerMock;
  let clearDataMock;
  let useForm;

  beforeEach(async () => {
    // Dynamically import useForm hook
    useForm = (await import('../../hooks/useForm')).default;

    const mockFormHook = useForm();
    onChangeHandlerMock = mockFormHook.onChangeHandler;
    onSubmitHandlerMock = mockFormHook.onSubmitHandler;
    clearDataMock = mockFormHook.clearData;
  });

  it('renders the form and submits correctly', async () => {
    render(
      <BrowserRouter>
        <CreateBlogPost />
      </BrowserRouter>
    );

    // Check if title input is rendered
    const titleInput = screen.getByPlaceholderText('Write post Title');
    expect(titleInput).toBeInTheDocument();

    // Simulate user typing in the title
    fireEvent.change(titleInput, { target: { value: 'My Test Post' } });
    expect(onChangeHandlerMock).toHaveBeenCalled();

    // Check if category select is rendered
    const categorySelect = screen.getByLabelText('Select a category');
    expect(categorySelect).toBeInTheDocument();

    // Simulate user selecting a category
    fireEvent.change(categorySelect, { target: { value: 'training' } });
    expect(onChangeHandlerMock).toHaveBeenCalled();

    // Check if the form submission works
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    await waitFor(() => expect(onSubmitHandlerMock).toHaveBeenCalled());

    // Ensure the clearData function is called after submission
    expect(clearDataMock).toHaveBeenCalled();
  });
});
