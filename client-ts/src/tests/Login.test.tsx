import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';
import { MemoryRouter } from 'react-router-dom';

test('render login', () => {
    render(
        <MemoryRouter>
            <Login />
        </MemoryRouter>
    );

    const getLogin = screen.getByText(/Login/i);
    const getRegister = screen.getByText(/Register/i);

    expect(getLogin).toBeInTheDocument();
    expect(getRegister).toBeInTheDocument();
});
