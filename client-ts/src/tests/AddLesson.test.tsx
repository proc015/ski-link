import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddLesson from '../components/AddLesson';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../apiService', () => ({
    getWeather: jest.fn().mockResolvedValue({ list: [] }),
    postLessons: jest.fn().mockResolvedValue({})
}));

test('updates input values on user input', () => {
    render(<MemoryRouter>
        <AddLesson />
    </MemoryRouter>);

    const nameInput = screen.getByPlaceholderText('Insert name here...') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Dani Lopez' } });
    expect(nameInput.value).toBe('Dani Lopez');

    const resortSelect = screen.getByLabelText('Select a resort:') as HTMLInputElement;
    fireEvent.change(resortSelect, { target: { value: 'Aspen' } });
    expect(resortSelect.value).toBe('Aspen');

});

