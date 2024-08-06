import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Profile from './Profile'; // Adjust the import path based on your file structure
import { useGetUserData, useGetUserPosts, useGetUserRecipes } from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';
import BlogPostsWrittenSection from './BlogPostsWrittenSection/BlogPostsWrittenSection';
import HighProteinRecipesWrittenSection from './HighProteinRecipesWrittenSection/HighProteinRecipesWrittenSection';

// Mock hooks
vi.mock('../../hooks/useAuth', () => ({
  useGetUserData: vi.fn(),
  useGetUserPosts: vi.fn(),
  useGetUserRecipes: vi.fn(),
}));

describe('Profile Component', () => {
  const mockUserData = {
    _id: 'user1',
    username: 'testuser',
    city: 'Test City',
    country: 'Test Country',
    imageUrl: 'test-image-url',
    description: 'This is a test user description',
  };

  const mockPosts = [
    {
      _id: 'post1',
      title: 'Test Post',
      _createdOn: '2024-01-01',
      _updatedOn: '2024-01-02',
      shortDescription: 'Short description of the test post',
      imageUrl: 'post-image-url',
    },
  ];

  const mockRecipes = [
    {
      _id: 'recipe1',
      title: 'Test Recipe',
      _createdOn: '2024-01-01',
      _updatedOn: '2024-01-02',
      description: 'Description of the test recipe',
      imageUrl: 'recipe-image-url',
    },
  ];

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  it('renders correctly when data is loading', () => {
    useGetUserData.mockReturnValue({ userData: null, isPreloading: true });
    useGetUserPosts.mockReturnValue({ userPosts: null, isLoading: true });
    useGetUserRecipes.mockReturnValue({ userRecipes: null, isLoadingData: true });

    render(<Profile />);
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  it('renders profile information when data is fetched', async () => {
    useGetUserData.mockReturnValue({ userData: mockUserData, isPreloading: false });
    useGetUserPosts.mockReturnValue({ userPosts: mockPosts, isLoading: false });
    useGetUserRecipes.mockReturnValue({ userRecipes: mockRecipes, isLoadingData: false });

    render(<Profile />);

    // Check profile information
    expect(screen.getByText(mockUserData.username)).toBeInTheDocument();
    expect(screen.getByText(`${mockUserData.city}, ${mockUserData.country}`)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.description)).toBeInTheDocument();
    
    // Check blog posts section
    expect(screen.getByText('Blog Posts Written')).toBeInTheDocument();
    expect(screen.getByText(mockPosts[0].title)).toBeInTheDocument();
    
    // Check recipes section
    expect(screen.getByText('High Protein Recipes Written')).toBeInTheDocument();
    expect(screen.getByText(mockRecipes[0].title)).toBeInTheDocument();
  });

  it('handles no blog posts and no recipes', () => {
    useGetUserData.mockReturnValue({ userData: mockUserData, isPreloading: false });
    useGetUserPosts.mockReturnValue({ userPosts: [], isLoading: false });
    useGetUserRecipes.mockReturnValue({ userRecipes: [], isLoadingData: false });

    render(<Profile />);
    
    // Check sections when no data is available
    expect(screen.getByText('Not Blog Posts written')).toBeInTheDocument();
    expect(screen.getByText('Not High Protein Recipes written')).toBeInTheDocument();
  });

  it('handles errors in data fetching', () => {
    useGetUserData.mockReturnValue({ userData: null, isPreloading: false, error: true });
    useGetUserPosts.mockReturnValue({ userPosts: null, isLoading: false, error: true });
    useGetUserRecipes.mockReturnValue({ userRecipes: null, isLoadingData: false, error: true });

    render(<Profile />);
    expect(screen.getByText('Something went wrong! Please try again later.')).toBeInTheDocument();
  });
});
