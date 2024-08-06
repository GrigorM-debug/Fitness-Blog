import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../AuthProvider/AuthProvider';
import AlertModal from './AlertModal';
import UserContext from '../../contexts/userContext';
import { useLogout } from '../../hooks/useAuth';

vi.mock('../../hooks/useAuth', () => ({
  useLogout: vi.fn(),
}));

const mockSessionStorage = {
  getItem: vi.fn(),
};

global.sessionStorage = mockSessionStorage;

describe('AlertModal Component', () => {
  it('should not render when isVisible is false', () => {
    render(
      <Router>
        <AlertModal isVisible={false} onClose={vi.fn()} />
      </Router>
    );

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('should render correctly when isVisible is true', () => {
    render(
      <Router>
        <AlertModal isVisible={true} onClose={vi.fn()} />
      </Router>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should call logout and navigate when "Yes, I\'m sure" is clicked', async () => {
    const mockLogout = vi.fn().mockResolvedValue(true);
    useLogout.mockReturnValue([mockLogout, null, false]);

    mockSessionStorage.getItem.mockReturnValue(JSON.stringify({ accessToken: 'mock-token' }));

    const mockLocalLogout = vi.fn();
    const mockNavigate = vi.fn();

    render(
      <Router>
        <AuthProvider>
          <UserContext.Provider value={{ logout: mockLocalLogout }}>
            <AlertModal isVisible={true} onClose={vi.fn()} />
          </UserContext.Provider>
        </AuthProvider>
      </Router>
    );

    fireEvent.click(screen.getByText(/Yes, I'm sure/i));

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalledWith('mock-token');
      expect(mockLocalLogout).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('should call onClose when "No, cancel" is clicked', () => {
    const mockOnClose = vi.fn();

    render(
      <Router>
        <AlertModal isVisible={true} onClose={mockOnClose} />
      </Router>
    );

    fireEvent.click(screen.getByText(/No, cancel/i));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
