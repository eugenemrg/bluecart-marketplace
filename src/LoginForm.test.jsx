import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Page Tests', () => {
  test('renders login page', () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('valid login', () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'valid_username' } });
    fireEvent.change(passwordInput, { target: { value: 'valid_password' } });
    fireEvent.click(loginButton);

  });

  test('invalid login', () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'invalid_username' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid_password' } });
    fireEvent.click(loginButton);
  });
});
