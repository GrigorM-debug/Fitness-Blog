// Preloader.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Preloader from './Preloader'; // Adjust the import path

describe('Preloader', () => {
  it('renders without errors', () => {
    render(<Preloader />);
    // Add assertions here (e.g., check if the loader element is present)
  });
});
