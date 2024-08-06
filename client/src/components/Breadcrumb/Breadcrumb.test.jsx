import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Breadcrumb from './Breadcrumb'; // Adjust the path if necessary
import { BrowserRouter } from 'react-router-dom';

// Mock the CSS module import
vi.mock('./Breadcrumb.module.css', () => ({
  default: {
    breadcrumbSection: 'breadcrumbSection',
    breadcrumbText: 'breadcrumbText',
    btOption: 'btOption',
  },
}));

describe('Breadcrumb Component', () => {
  it('renders the breadcrumb with title and page', () => {
    const title = 'Sample Title';
    const page = 'Sample Page';
    const breadcrumbImage = 'sample-image.jpg';

    render(
      <BrowserRouter>
        <Breadcrumb title={title} page={page} breadcrumbImage={breadcrumbImage} />
      </BrowserRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText(title)).toBeInTheDocument();

    // Check if the page is rendered
    expect(screen.getByText(page)).toBeInTheDocument();

    const section = screen.getByRole('banner');
    expect(section).toHaveStyle(`background-image: url(${breadcrumbImage})`);

    // Check if the Home link is present
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toHaveAttribute('href', './index.html');
  });
});
