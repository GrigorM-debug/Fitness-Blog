import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BMICalculator from './BMICalculator';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock styles import using importOriginal helper
vi.mock('./BMICalculator.module.css', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    // your mocked class names
    bmiCalculatorSection: 'bmiCalculatorSection',
    chartTitle: 'chartTitle',
    charTable: 'charTable',
    charCalculateTitle: 'charCalculateTitle',
    charCalculateForm: 'charCalculateForm',
    unitSelect: 'unitSelect',
    point: 'point',
    userBMI: 'userBMI',
  };
});

describe('BMICalculator Component', () => {
  it('renders correctly with all elements', () => {
    render(
      <Router>
        <BMICalculator />
      </Router>
    );

    expect(screen.getByText(/BMI CALCULATOR CHART/i)).toBeInTheDocument();
    expect(screen.getByText(/CALCULATE YOUR BMI/i)).toBeInTheDocument();
    expect(screen.getByText(/check your body/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Height/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Height Unit/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Weight Unit/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });

  it('calculates BMI correctly for cm and kg', async () => {
    render(
      <Router>
        <BMICalculator />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '170' } });
    fireEvent.change(screen.getByLabelText(/Select Height Unit/i), { target: { value: 'cm' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '70' } });
    fireEvent.change(screen.getByLabelText(/Select Weight Unit/i), { target: { value: 'kg' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));

    await waitFor(() => {
      expect(screen.getByDisplayValue('24.22')).toBeInTheDocument();
    });
  });

  it('calculates BMI correctly for ft and lb', async () => {
    render(
      <Router>
        <BMICalculator />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '5.6' } });
    fireEvent.change(screen.getByLabelText(/Select Height Unit/i), { target: { value: 'ft' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '154' } });
    fireEvent.change(screen.getByLabelText(/Select Weight Unit/i), { target: { value: 'lb' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));

    await waitFor(() => {
      expect(screen.getByDisplayValue('24.98')).toBeInTheDocument();
    });
  });

  it('shows validation message for invalid inputs', async () => {
    render(
      <Router>
        <BMICalculator />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: 'invalid' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: 'invalid' } });

    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));

    await waitFor(() => {
      expect(screen.getByDisplayValue(/Provide valid height and weight!/i)).toBeInTheDocument();
    });
  });

  it('updates state correctly when inputs change', () => {
    render(
      <Router>
        <BMICalculator />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '160' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '60' } });

    expect(screen.getByLabelText(/Height/i).value).toBe('160');
    expect(screen.getByLabelText(/Weight/i).value).toBe('60');
  });
});
