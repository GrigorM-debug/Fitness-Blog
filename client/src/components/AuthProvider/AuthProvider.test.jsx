import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { createContext, useContext } from 'react';
import { AuthProvider } from './AuthProvider';
import UserContext from '../../contexts/userContext';

// Mock the usePersistedState hook
vi.mock('../../hooks/usePersistedState', () => ({
  __esModule: true,
  default: vi.fn().mockImplementation((key, initial) => [initial, vi.fn()]),
}));

describe('AuthProvider Component', () => {
  it('should render children correctly', () => {
    render(
      <AuthProvider>
        <div>Child Component</div>
      </AuthProvider>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('should provide the correct initial context value', () => {
    const TestComponent = () => {
      const { contextData } = useContext(UserContext);
      return (
        <div>
          <span data-testid="isAuthenticated">{contextData.isAuthenticated ? 'true' : 'false'}</span>
        </div>
      );
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Check the initial value of isAuthenticated
    expect(screen.getByTestId('isAuthenticated').textContent).toBe('false');
  });

  it('should update context state via setUserDataHandler', () => {
    const TestComponent = () => {
      const { contextData, setUserDataHandler } = useContext(UserContext);
      return (
        <div>
          <button onClick={() => setUserDataHandler({ username: 'JohnDoe', email: 'john@example.com' })}>
            Update User Data
          </button>
          <span data-testid="username">{contextData.username}</span>
          <span data-testid="email">{contextData.email}</span>
        </div>
      );
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    act(() => {
      screen.getByText('Update User Data').click();
    });

    expect(screen.getByTestId('username').textContent).toBeDisabled('JohnDoe');
    expect(screen.getByTestId('email').textContent).toBe('john@example.com');
  });

  it('should clear context data on logout', () => {
    const TestComponent = () => {
      const { contextData, logout } = useContext(UserContext);
      return (
        <div>
          <button onClick={logout}>Logout</button>
          <span data-testid="isAuthenticated">{contextData.isAuthenticated ? 'true' : 'false'}</span>
        </div>
      );
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Logout and check if the context is cleared
    act(() => {
      screen.getByText('Logout').click();
    });

    expect(screen.getByTestId('isAuthenticated').textContent).toBe('false');
  });
});
