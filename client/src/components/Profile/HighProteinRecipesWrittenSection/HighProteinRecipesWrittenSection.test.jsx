// HighProteinRecipesWrittenSection.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import the MemoryRouter
import HighProteinRecipesWrittenSection from './HighProteinRecipesWrittenSection'; // Adjust the import path
import { timestampToDate } from '../../../utils/timeSpanToDate'; // Adjust the import path for your timestamp conversion function

describe('HighProteinRecipesWrittenSection', () => {
  const mockData = {
    title: 'Delicious High-Protein Recipe',
    createdOn: 1628328000000, // Example timestamp (in milliseconds)
    updatedOn: 1628500800000, // Example timestamp (in milliseconds)
    description: 'Try this amazing protein-packed dish!',
    recipeId: '123',
    imageUrl: 'https://example.com/recipe-image.jpg',
  };

  it('renders without errors', () => {
    render(<HighProteinRecipesWrittenSection {...mockData} />);
    // Add assertions here (e.g., check if certain elements are present)
  });

  it('displays the correct image URL', () => {
    const { getByAltText } = render(<HighProteinRecipesWrittenSection {...mockData} />);
    const imageElement = getByAltText('Recipe Image');
    expect(imageElement.src).toBe(mockData.imageUrl);
  });

  it('renders title, created date, and description', () => {
    const { getByText } = render(<HighProteinRecipesWrittenSection {...mockData} />);
    expect(getByText(mockData.title)).toBeInTheDocument();
    expect(getByText(`Created On: ${timestampToDate(mockData.createdOn)}`)).toBeInTheDocument();
    expect(getByText(mockData.description)).toBeInTheDocument();
  });

  it('navigates to the correct URL when Details link is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HighProteinRecipesWrittenSection {...mockData} />
      </MemoryRouter>
    );
    const detailsLink = getByText('Details');
    expect(detailsLink.getAttribute('href')).toBe(`/healthy-recipes/${mockData.recipeId}/details`);
  });
});
