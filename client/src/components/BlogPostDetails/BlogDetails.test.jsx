import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import BlogPostDetails from './BlogPostDetails';
import UserContext from '../../contexts/userContext';
import { useGetOneBlogPost } from '../../hooks/useBlogPosts';
import { useGetAll } from '../../hooks/useBlogPostComments';
import { useGetLikes, useLikePost } from '../../hooks/usePostLikes';

// Mocking the hooks
vi.mock('../../hooks/useBlogPosts', () => ({
  useGetOneBlogPost: vi.fn(),
}));
vi.mock('../../hooks/useBlogPostComments', () => ({
  useGetAll: vi.fn(),
}));
vi.mock('../../hooks/usePostLikes', () => ({
  useGetLikes: vi.fn(),
  useLikePost: vi.fn(),
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: MemoryRouter });
};

describe('BlogPostDetails Component', () => {
  const mockPost = {
    _id: '1',
    title: 'Test Post',
    imageUrl: 'test.jpg',
    category: 'Test Category',
    author: { username: 'Author', email: 'author@example.com', description: 'Author Description', imageUrl: 'author.jpg' },
    subTitle: 'Test Subtitle',
    shortDescription: 'Test Short Description',
    content: 'Test Content',
    _ownerId: '123',
    _createdOn: '2023-08-06',
    _updatedOn: '2023-08-07',
  };

  const mockComments = [];
  const mockLikes = [];

  beforeEach(() => {
    useGetOneBlogPost.mockReturnValue([mockPost, false]);
    useGetAll.mockReturnValue([mockComments, vi.fn()]);
    useGetLikes.mockReturnValue([mockLikes, vi.fn()]);
  });

  it('renders blog post details correctly', () => {
    renderWithRouter(
      <UserContext.Provider value={{ contextData: { isAuthenticated: true, _id: '123' } }}>
        <Routes>
          <Route path="/blog/:blogPostId" element={<BlogPostDetails />} />
        </Routes>
      </UserContext.Provider>,
      { route: '/blog/1' }
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Short Description')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Author')).toBeInTheDocument();
  });

  it('displays loading state while fetching', () => {
    useGetOneBlogPost.mockReturnValue([null, true]);
    renderWithRouter(
      <UserContext.Provider value={{ contextData: { isAuthenticated: true, _id: '123' } }}>
        <Routes>
          <Route path="/blog/:blogPostId" element={<BlogPostDetails />} />
        </Routes>
      </UserContext.Provider>,
      { route: '/blog/1' }
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument(); // Assuming Preloader displays "loading" text
  });

  it('renders AuthorButtons for the author', () => {
    renderWithRouter(
      <UserContext.Provider value={{ contextData: { isAuthenticated: true, _id: '123' } }}>
        <Routes>
          <Route path="/blog/:blogPostId" element={<BlogPostDetails />} />
        </Routes>
      </UserContext.Provider>,
      { route: '/blog/1' }
    );

    expect(screen.getByText(/edit/i)).toBeInTheDocument(); // Assuming AuthorButtons contain "edit" text
    expect(screen.getByText(/delete/i)).toBeInTheDocument(); // Assuming AuthorButtons contain "delete" text
  });

  it('renders LikeButton for authenticated user', () => {
    renderWithRouter(
      <UserContext.Provider value={{ contextData: { isAuthenticated: true, _id: '124' } }}>
        <Routes>
          <Route path="/blog/:blogPostId" element={<BlogPostDetails />} />
        </Routes>
      </UserContext.Provider>,
      { route: '/blog/1' }
    );

    // Ensure LikeButton is rendered if authenticated
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
  });

  it('does not render LikeButton for non-authenticated user', () => {
    renderWithRouter(
      <UserContext.Provider value={{ contextData: { isAuthenticated: false } }}>
        <Routes>
          <Route path="/blog/:blogPostId" element={<BlogPostDetails />} />
        </Routes>
      </UserContext.Provider>,
      { route: '/blog/1' }
    );

    // Ensure LikeButton is not rendered if not authenticated
    expect(screen.queryByRole('button', { name: /like/i })).not.toBeInTheDocument();
  });
});
