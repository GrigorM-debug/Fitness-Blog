import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Register from './Register';
import useForm from '../../hooks/useForm';
import useAuth from '../../hooks/useAuth';

// Mock hooks and navigate function
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

const initialData = {
  username: '',
  email: '',
  password: '',
  rePassword: '',
  description: '',
  country: '',
  city: '',
  imageUrl: '',
};

// Mock useForm hook
vi.mock('../../hooks/useForm', () => ({
  useForm: vi.fn(() => ({
    formData: initialData,
    onChangeHandler: vi.fn(),
    onSubmitHandler: vi.fn().mockImplementation((e) => e.preventDefault()),
    clearData: vi.fn(),
  })),
}));

// Mock useAuth hook
vi.mock('../../hooks/useAuth', () => ({
  useRegister: vi.fn(() => [vi.fn(), {}, false]),
}));

describe('Register Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Register />);
    expect(getByText('Create your account')).toBeInTheDocument();
    expect(getByPlaceholderText('johncena')).toBeInTheDocument();
  });

  it('submits the form with correct data', async () => {
    const formSubmitMock = vi.fn();
    useAuth.useRegister.mockReturnValue([formSubmitMock, {}, false]);

    const { getByRole, getByPlaceholderText } = render(<Register />);
    const usernameInput = getByRole('textbox', { name: /username/i });
    fireEvent.change(usernameInput, { target: { value: 'newUser' } });

    const submitButton = getByRole('button', { name: /submit/i }); // Adjust the button text if necessary
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(formSubmitMock).toHaveBeenCalledWith({
        ...initialData,
        username: 'newUser',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg', // default URL
      });
    });
  });

  it('shows preloader when fetching', () => {
    const formSubmitMock = vi.fn();
    useAuth.useRegister.mockReturnValue([formSubmitMock, {}, true]);

    const { getByTestId } = render(<Register />);
    expect(getByTestId('preloader')).toBeInTheDocument();
  });

  // Additional tests for error handling, default image URL, and other functionalities can be added here
});
