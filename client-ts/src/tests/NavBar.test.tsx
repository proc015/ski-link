import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';

// Mocking localStorage.removeItem and window.location.reload
const mockRemoveItem = jest.fn();
Storage.prototype.removeItem = mockRemoveItem;

const mockReload = jest.fn();
Object.defineProperty(window, 'location', {
    value: {
        reload: mockReload
    }
});

test('handleLogout is called on logout click', () => {
    render(<MemoryRouter>
        <NavBar />
    </MemoryRouter>);

    const logoutSpan = screen.getByText(/Logout/i).closest('span');


    if (logoutSpan) {
        fireEvent.click(logoutSpan);

        // Check if localStorage.removeItem was called with 'email'
        expect(mockRemoveItem).toHaveBeenCalledWith('email');

        // Check if window.location.reload was called
        expect(mockReload).toHaveBeenCalled();
    } else {
        throw new Error('Logout span not found in the document');
    }
});
