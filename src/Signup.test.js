import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignupForm from './SignupForm'; // Import your SignupForm component

describe('SignupForm Component', () => {
  it('renders the SignupForm component', () => {
    render(<SignupForm />);
    
    
    const form = screen.getByTestId('signup-form');
    expect(form).toBeInTheDocument();
  });

  it('submits the form with valid input', () => {
    render(<SignupForm />);
    
    const usernameInput = screen.getByTestId('username-input');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    
    fireEvent.click(submitButton);
  });

  
  it('displays an error message for required fields if not filled', () => {
    render(<SignupForm />);
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    
    const usernameError = screen.getByTestId('username-error');
    const emailError = screen.getByTestId('email-error');
    const passwordError = screen.getByTestId('password-error');

    expect(usernameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
